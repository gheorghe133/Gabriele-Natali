import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/AuthService/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../services/DataService/data.service';

@Component({
  selector: 'app-home',
  template: `
    @if(categories && categories.length > 0){
    <div class="tabs is-centered mt-5">
      <ul>
        <li
          *ngFor="let category of categories"
          (click)="setActiveTab(category)"
          [ngClass]="{ 'is-active': activeTab === category }"
        >
          <a>{{ category }}</a>
          <button class="button is-danger" (click)="deleteCategory(category)">
            delete
          </button>
        </li>
      </ul>
    </div>
    }

    <div class="buttons">
      <button *ngIf="userData" class="button is-danger " (click)="logout()">
        Sign out
      </button>
      <button
        *ngIf="userData"
        class="button is-warning "
        (click)="toggleCategoryModal()"
      >
        Create category
      </button>
      <button
        *ngIf="userData"
        class="button is-warning "
        (click)="togglePhotoModal()"
      >
        Add photo
      </button>
    </div>

    <div class="container-custom">
      <div *ngFor="let image of images">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img [src]="image.image" [alt]="image.description" />
            </figure>
          </div>
        </div>
      </div>
    </div>

    <!-- category modal window -->
    <div class="modal" #categorymodal>
      <div class="modal-background" (click)="toggleCategoryModal()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create category</p>
          <button
            class="delete"
            aria-label="close"
            (click)="toggleCategoryModal()"
          ></button>
        </header>
        <section class="modal-card-body">
          <form [formGroup]="categoryForm">
            <div class="field">
              <label class="label">Category Title</label>
              <div class="control">
                <input
                  class="input is-warning"
                  type="text"
                  formControlName="category_title"
                  placeholder="Category title"
                />
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button
            id="submitButton"
            class="button is-warning"
            (click)="addCategory()"
            [disabled]="this.categoryForm.invalid"
          >
            Save changes
          </button>
          <button class="button" (click)="toggleCategoryModal()">Cancel</button>
        </footer>
      </div>
    </div>

    <!-- photos for category modal window -->
    <div class="modal" #photoModal>
      <div class="modal-background" (click)="togglePhotoModal()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add photo</p>
          <button
            class="delete"
            aria-label="close"
            (click)="togglePhotoModal()"
          ></button>
        </header>
        <section class="modal-card-body">
          <form [formGroup]="photoForm">
            <div class="field">
              <label class="label">Category</label>
              <div class="control">
                <div class="select is-warning is-fullwidth">
                  <select formControlName="photo_category">
                    <option value="" disabled selected>
                      Select category type
                    </option>
                    <option *ngFor="let category of categories">
                      {{ category }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Image</label>
              <div class="control">
                <div class="file has-name is-warning is-fullwidth">
                  <label class="file-label">
                    <input
                      class="file-input"
                      type="file"
                      accept="image/*"
                      id="imageInput"
                      name="resume"
                      (change)="onFileSelected($event)"
                      formControlName="photo_image"
                    />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label"> Choose an image... </span>
                    </span>
                    <ng-container *ngIf="this.photoForm.value.photo_image">
                      <span class="file-name">
                        {{ this.photoForm.value.photo_image }}
                      </span>
                    </ng-container>
                  </label>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Photo description</label>
              <div class="control">
                <input
                  class="input is-warning"
                  type="text"
                  formControlName="photo_description"
                  placeholder="Photo description"
                />
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button
            id="submitButton"
            class="button is-warning"
            (click)="addPhoto()"
            [disabled]="this.photoForm.invalid"
          >
            Save changes
          </button>
          <button class="button" (click)="togglePhotoModal()">Cancel</button>
        </footer>
      </div>
    </div>
  `,
  styles: [
    `
      .container-custom {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 1em 1em;
      }

      .card {
        background: transparent;
      }

      .card img {
        cursor: pointer;
      }
    `,
  ],
})
export class HomeComponent {
  categories: string[] = [];
  activeTab: string;
  userData: any;
  categoryForm: FormGroup;
  photoForm: FormGroup;
  images: any[] = []; // Adăugați o nouă proprietate pentru a stoca imaginile

  @ViewChild('categorymodal') categorymodal: ElementRef;
  @ViewChild('photoModal') photoModal: ElementRef;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    // Initialize forms
    this.categoryForm = this.formBuilder.group({
      category_title: ['', [Validators.required]],
    });

    this.photoForm = this.formBuilder.group({
      photo_description: ['', [Validators.required]],
      photo_category: ['', [Validators.required]],
      photo_image: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // Load categories on component initialization
    this.loadCategories();
  }

  ngDoCheck() {
    // Check for changes in local storage and update userData variable
    this.userData = JSON.parse(localStorage.getItem('user'));
  }

  // Load user categories
  // Load user categories
  loadCategories() {
    this.dataService.getUserCategories().then((userCategories: any[]) => {
      this.categories = userCategories.map((category: any) => category.title);
      this.activeTab = this.categories[0]; // Set the first category as active by default
      this.loadImagesForCategory(this.activeTab); // Load images for the default active category
    });
  }

  // Set active tab
  setActiveTab(category: string): void {
    this.activeTab = category;
    this.loadImagesForCategory(category); // Load images for the newly selected category
  }

  // Load images for the active category
  loadImagesForCategory(category: string) {
    // Call a method in DataService to fetch images for the specified category
    this.dataService.getImagesForCategory(category).then((images: any[]) => {
      this.images = images;
    });
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadImage(file);
  }

  async uploadImage(imageFile: File) {
    try {
      const user = JSON.parse(localStorage.getItem('user')!);
      const filePath = `${user.uid}/${Date.now()}_${imageFile.name}`;
      const uploadTask = this.dataService.storage.upload(filePath, imageFile);
      const snapshot = await uploadTask;
      const imageUrl = await snapshot.ref.getDownloadURL();
      // Adăugați URL-ul imaginii și alte detalii în categoria specificată
      this.dataService.addPhotoToCategory({
        photo_category: this.photoForm.value.photo_category, // Categoria specificată
        photo_image: imageUrl,
        photo_description: this.photoForm.value.photo_description,
      });
      console.log('Image uploaded successfully. URL:', imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  // Logout user
  logout() {
    this.authService.SignOut();
    console.log('Logged out successfully');
  }

  // Toggle category modal
  toggleCategoryModal() {
    this.categorymodal.nativeElement.classList.toggle('is-active');
  }

  // Toggle photo modal
  togglePhotoModal() {
    this.photoModal.nativeElement.classList.toggle('is-active');
  }

  // Add category
  addCategory() {
    const categoryTitle = this.categoryForm.get('category_title')?.value;
    if (categoryTitle) {
      this.dataService.addCategory(categoryTitle);
      this.toggleCategoryModal();
      this.categoryForm.reset();
    }
  }

  // Add photo
  addPhoto() {
    const photoData = this.photoForm.value;
    console.log(photoData);
    // Call method to add photo to the selected category
    this.dataService
      .addPhotoToCategory(photoData)
      .then(() => {
        this.togglePhotoModal();
        this.photoForm.reset();
      })
      .catch((error) => {
        console.error('Error adding photo:', error);
        alert('Failed to add photo. Please try again later.');
      });
  }

  // Delete category
  deleteCategory(category: string) {
    const categoryId = category;
    if (categoryId) {
      this.dataService
        .deleteCategory(categoryId)
        .then(() => {
          console.log('Category deleted successfully');
          // Reload categories after deletion
          this.loadCategories();
        })
        .catch((error) => {
          console.error('Error deleting category:', error);
          alert('Failed to delete category. Please try again later.');
        });
    }
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../../../services/AuthService/auth.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="tabs is-centered mt-5">
      <ul>
        @for(category of categories; track $index){
        <li
          (click)="setActiveTab(category)"
          [ngClass]="{ 'is-active': activeTab === category }"
        >
          <a>{{ category }}</a>
        </li>
        }
      </ul>
    </div>

    <div class="buttons">
      <button *ngIf="userData" class="button is-danger " (click)="logout()">
        Sign out
      </button>
      <button *ngIf="userData" class="button is-warning ">
        Create category
      </button>
    </div>

    @if (activeTab === 'Container 1') {
    <div class="container-custom">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
    </div>
    } @if (activeTab === 'Container 2') {
    <div class="container-custom">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
    </div>
    }
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
  categories: string[] = ['Container 1', 'Container 2'];

  activeTab: string = 'Container 1';

  userData;
  userId;

  constructor(private authService: AuthService) {}

  ngDoCheck() {
    // Check for changes in local storage and update userData variable
    this.userData = JSON.parse(localStorage.getItem('user'));

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.uid) {
      this.userId = user.uid;
    }
  }

  setActiveTab(category: string): void {
    this.activeTab = category;
  }

  async logout() {
    try {
      // Implementează metoda de deconectare din serviciul authService
      // Poți adăuga cod aici pentru a te asigura că utilizatorul este delogat și pe partea de client și pe partea de server
      this.authService.SignOut();
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}

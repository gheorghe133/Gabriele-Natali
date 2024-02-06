import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    public afs: AngularFirestore,
    public storage: AngularFireStorage
  ) {}

  async addCategory(categoryTitle: string) {
    try {
      const user = JSON.parse(localStorage.getItem('user')!);
      const categoryData = {
        title: categoryTitle,
      };
      await this.afs
        .collection(`users/${user.uid}/categories`)
        .add(categoryData);
      console.log('Category added successfully');
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Failed to add category. Please try again later.');
    }
  }

  // Get categories for current user
  async getUserCategories(): Promise<any[]> {
    const user = JSON.parse(localStorage.getItem('user')!);
    const querySnapshot = await this.afs
      .collection(`users/${user.uid}/categories`)
      .get()
      .toPromise();
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as any), // Conversie la tipul 'any'
    }));
  }

  async addPhotoToCategory(photoData: any) {
    try {
      const user = JSON.parse(localStorage.getItem('user')!);
      const { photo_image, photo_description, photo_category } = photoData;

      // Obțineți ID-ul specific al categoriei corespunzătoare titlului selectat
      const categoryId = await this.getCategoryIdFromTitle(photo_category);

      // Verificați dacă a fost găsit ID-ul categoriei
      if (categoryId) {
        // Adăugați detaliile imaginii în colecția specificată pentru categoria specificată
        await this.afs
          .collection(`users/${user.uid}/categories/${categoryId}/photos`)
          .add({
            image: photo_image,
            description: photo_description,
          });

        console.log('Photo added successfully');
      } else {
        console.error('Error adding photo: Category ID not found');
        throw new Error('Category ID not found');
      }
    } catch (error) {
      console.error('Error adding photo:', error);
      throw error;
    }
  }

  // Funcție pentru a obține ID-ul categoriei din titlu
  private async getCategoryIdFromTitle(
    title: string
  ): Promise<string | undefined> {
    try {
      // Obțineți lista de categorii pentru utilizatorul curent
      const user = JSON.parse(localStorage.getItem('user')!);
      const categories = await this.afs
        .collection(`users/${user.uid}/categories`)
        .get()
        .toPromise();

      // Căutați categoria cu titlul specificat
      const category = categories.docs.find(
        (doc: any) => doc.data().title === title
      );

      // Returnați ID-ul categoriei dacă a fost găsită
      return category?.id;
    } catch (error) {
      console.error('Error getting category ID:', error);
      throw error;
    }
  }

  async deleteCategory(categoryTitle: string): Promise<void> {
    try {
      const user = JSON.parse(localStorage.getItem('user')!);
      const categories = await this.getUserCategories();
      const categoryId = categories.find(
        (cat) => cat.title === categoryTitle
      )?.id;
      if (categoryId) {
        await this.afs
          .collection(`users/${user.uid}/categories`)
          .doc(categoryId)
          .delete();
        console.log('Category deleted successfully');
      } else {
        throw new Error('Category ID not found');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      throw error;
    }
  }

  async deletePhoto(
    categoryTitle: string,
    photoDescription: string
  ): Promise<void> {
    try {
      const user = JSON.parse(localStorage.getItem('user')!);
      const categories = await this.getUserCategories();
      const categoryId = categories.find(
        (cat) => cat.title === categoryTitle
      )?.id;
      if (categoryId) {
        const snapshot = await this.afs
          .collection(`users/${user.uid}/categories/${categoryId}/photos`)
          .get()
          .toPromise();
        snapshot.forEach((doc) => {
          const data = doc.data() as { description: string }; // Specificăm tipul datelor
          if (data.description === photoDescription) {
            doc.ref.delete();
            console.log('Photo deleted successfully');
          }
        });
      } else {
        throw new Error('Category ID not found');
      }
    } catch (error) {
      console.error('Error deleting photo:', error);
      throw error;
    }
  }

  // Obține imagini pentru o categorie specificată
  async getImagesForCategory(category: string): Promise<any[]> {
    try {
      const user = JSON.parse(localStorage.getItem('user')!);
      const categories = await this.getUserCategories();
      const categoryId = categories.find((cat) => cat.title === category)?.id;
      if (categoryId) {
        // Fetch images for the specified category
        const snapshot = await this.afs
          .collection(`users/${user.uid}/categories/${categoryId}/photos`)
          .get()
          .toPromise();
        const images = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as object),
        }));

        return images;
      } else {
        throw new Error('Category ID not found');
      }
    } catch (error) {
      console.error('Error fetching images for category:', error);
      return [];
    }
  }
}

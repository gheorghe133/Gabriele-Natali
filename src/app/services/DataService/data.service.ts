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
      const { photo_image, photo_description } = photoData;

      // Obțineți ID-ul specific al categoriei corespunzătoare titlului selectat
      // Ar trebui să folosiți o metodă pentru a obține ID-ul, aici este doar un exemplu simplu
      const categoryId = 'JAXSQ9KkJGq2fOduY7e5'; // Exemplu: ID-ul categoriei

      // Adăugați detaliile imaginii în colecția specificată pentru categoria specificată
      await this.afs
        .collection(`users/${user.uid}/categories/${categoryId}/photos`)
        .add({
          image: photo_image,
          description: photo_description,
        });

      console.log('Photo added successfully');
    } catch (error) {
      console.error('Error adding photo:', error);
      throw error;
    }
  }

  // Obține fotografiile dintr-o anumită categorie
  getPhotosByCategory(category: string): Observable<any[]> {
    const user = JSON.parse(localStorage.getItem('user')!);
    return this.afs
      .collection(`users/${user.uid}/categories/${category}/photos`)
      .valueChanges({ idField: 'id' });
  }
}

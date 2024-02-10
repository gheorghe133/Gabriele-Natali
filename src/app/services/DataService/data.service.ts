import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    public afs: AngularFirestore,
    public storage: AngularFireStorage
  ) {}

  async addCategory(categoryTitle: string): Promise<string> {
    try {
      const user = await this.getCurrentUser();
      const categoryData = { title: categoryTitle };
      const docRef = await this.afs
        .collection(`users/${user.uid}/categories`)
        .add(categoryData);
      const categoryId = docRef.id;
      await docRef.update({ categoryId });
      console.log('Category added successfully');
      return categoryId;
    } catch (error) {
      console.error('Error adding category:', error);
      throw new Error('Failed to add category. Please try again later.');
    }
  }

  async addPhotoToCategory(photoData: any): Promise<string> {
    try {
      const user = await this.getCurrentUser();
      const { photo_image, photo_description, photo_category } = photoData;
      let categoryId = await this.getCategoryIdFromTitle(photo_category);
      if (!categoryId) {
        categoryId = await this.addCategory(photo_category);
      }
      const imageUrl = await this.uploadImage(photo_image);
      const docRef = await this.afs
        .collection(`users/${user.uid}/categories/${categoryId}/photos`)
        .add({
          image: imageUrl,
          description: photo_description,
        });
      const photoId = docRef.id;
      console.log('Photo added successfully with ID:', photoId);
      return photoId;
    } catch (error) {
      console.error('Error adding photo:', error);
      throw new Error('Failed to add photo. Please try again later.');
    }
  }

  private async getCurrentUser(): Promise<any> {
    return JSON.parse(localStorage.getItem('user')!);
  }

  private async uploadImage(imageFile: File): Promise<string> {
    try {
      const user = await this.getCurrentUser();
      const filePath = `${user.uid}/${Date.now()}_${imageFile.name}`;
      const uploadTask = this.storage.upload(filePath, imageFile);
      const snapshot = await uploadTask;
      return await snapshot.ref.getDownloadURL();
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image. Please try again later.');
    }
  }

  private async getCategoryIdFromTitle(
    title: string
  ): Promise<string | undefined> {
    try {
      const user = await this.getCurrentUser();
      const categories = await this.afs
        .collection(`users/${user.uid}/categories`)
        .get()
        .toPromise();
      const category = categories.docs.find(
        (doc: any) => doc.data().title === title
      );
      return category?.id;
    } catch (error) {
      console.error('Error getting category ID:', error);
      throw new Error('Failed to get category ID. Please try again later.');
    }
  }

  async deleteCategory(categoryTitle: string): Promise<void> {
    try {
      const user = await this.getCurrentUser();
      const categoryId = await this.getCategoryIdFromTitle(categoryTitle);
      if (!categoryId) throw new Error('Category ID not found');
      await this.afs
        .collection(`users/${user.uid}/categories`)
        .doc(categoryId)
        .delete();
      console.log('Category deleted successfully');
    } catch (error) {
      console.error('Error deleting category:', error);
      throw new Error('Failed to delete category. Please try again later.');
    }
  }

  async deletePhoto(
    categoryTitle: string,
    photoDescription: string
  ): Promise<void> {
    try {
      const user = await this.getCurrentUser();
      const categoryId = await this.getCategoryIdFromTitle(categoryTitle);
      if (!categoryId) throw new Error('Category ID not found');
      const snapshot = await this.afs
        .collection(`users/${user.uid}/categories/${categoryId}/photos`)
        .get()
        .toPromise();
      const photoDoc = snapshot.docs.find(
        (doc) => doc.data().description === photoDescription
      );
      if (!photoDoc) throw new Error('Photo not found');
      await photoDoc.ref.delete();
      console.log('Photo deleted successfully');
    } catch (error) {
      console.error('Error deleting photo:', error);
      throw new Error('Failed to delete photo. Please try again later.');
    }
  }

  async getUserCategories(): Promise<any[]> {
    try {
      const user = await this.getCurrentUser();
      const querySnapshot = await this.afs
        .collection(`users/${user.uid}/categories`)
        .get()
        .toPromise();
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }));
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories. Please try again later.');
    }
  }

  async getImagesForCategory(category: string): Promise<any[]> {
    try {
      const user = await this.getCurrentUser();
      const categoryId = await this.getCategoryIdFromTitle(category);
      if (!categoryId) throw new Error('Category ID not found');
      const snapshot = await this.afs
        .collection(`users/${user.uid}/categories/${categoryId}/photos`)
        .get()
        .toPromise();
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as object),
      }));
    } catch (error) {
      console.error('Error fetching images for category:', error);
      throw new Error('Failed to fetch images. Please try again later.');
    }
  }
}

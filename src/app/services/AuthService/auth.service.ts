import { Injectable, NgZone } from '@angular/core';
import { User } from '../../models/User/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false;
  }

  // Login with email and password
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.router.navigate(['/']);
      this.SetUserData(result.user);
    } catch (error) {
      alert(
        'Authentication failed. Please check your credentials and try again.'
      );
    }
  }

  // Signup with email and password
  async signup(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.router.navigate(['/']);
      this.SetUserData(result.user);
    } catch (error) {
      alert('Signup failed. Please try again later.');
    }
  }

  // Setting up user data when sign up or login with email/password
  async SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  async SignOut() {
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Logout failed. Please try again later.');
    }
  }
}

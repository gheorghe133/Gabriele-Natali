import { Component } from '@angular/core';
import { AuthService } from '../../../services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="hero is-small mt-5 mb-5">
      <div class="hero-body is-justify-content-center is-align-items-center">
        <div class="columns is-flex is-flex-direction-column box">
          <div class="column">
            <label for="email" class="label">Email</label>
            <input
              class="input is-primary"
              type="text"
              placeholder="Email address"
              [(ngModel)]="email"
            />
          </div>
          <div class="column">
            <label for="Name" class="label">Password</label>
            <input
              class="input is-primary"
              type="password"
              placeholder="Password"
              [(ngModel)]="password"
            />
          </div>
          <div class="column">
            <button class="button is-primary is-fullwidth" (click)="login()">
              Login
            </button>
          </div>
          <!-- <div class="column">
            <button class="button is-primary is-fullwidth" (click)="signup()">
              Signup
            </button>
          </div> -->
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

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

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      console.log('Logged in successfully');
      this.isLoggedIn = true;
      // Poți naviga către altă pagină după logare, dacă este necesar
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  async signup() {
    try {
      await this.authService.signup(this.email, this.password);
      console.log('Signed up successfully');
      this.isLoggedIn = true;
      // Poți naviga către altă pagină după înregistrare, dacă este necesar
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }
}

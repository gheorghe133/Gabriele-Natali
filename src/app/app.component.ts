import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <router-outlet> </router-outlet> `,
  styles: [
    `
      .navbar-brand {
        width: 100%;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Gabriele-Natali';
}

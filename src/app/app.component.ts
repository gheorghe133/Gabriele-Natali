import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="section">
      <div class="container">
        <router-outlet> </router-outlet>
      </div>
    </section>
  `,
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

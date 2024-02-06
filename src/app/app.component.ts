import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="section">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand is-justify-content-center">
          <h1 class="title is-1">Gabriele Natali</h1>
        </div>
      </nav>
      <router-outlet />
      <footer class="footer mt-5">
        <div class="content has-text-centered">
          <p>With ❤️ from <strong>Vrinceanu Iulian</strong></p>
        </div>
      </footer>
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container container-custom mt-6 mb-6">
      <div class="card" [routerLink]="['/categoria', 'acquerelli']">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-1.jpg" alt="ACQUERELLI" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">ACQUERELLI</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-2.jpg" alt="AFORISMI" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">AFORISMI</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="../../assets/categoria-3.jpg"
              alt="DISEGNO CON (O SENZA) IMPEGNO"
            />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">
            DISEGNO CON (O SENZA) IMPEGNO
          </h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-4.jpg" alt="Epopea Femminile" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">Epopea Femminile</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-5.jpg" alt="FUORI" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">FUORI</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="../../assets/categoria-6.jpg"
              alt="Gli Indiani d'America"
            />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">Gli Indiani d'America</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="../../assets/categoria-7.jpg"
              alt="La nouva generazione salva il mondo"
            />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">
            La nouva generazione salva il mondo
          </h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-8.jpg" alt="Omaggio a Pablo" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">Omaggio a Pablo</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-9.jpg" alt="Rosso e Nero" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">Rosso e Nero</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-10.jpg" alt="SERIE BACIO" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">SERIE BACIO</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-11.jpg" alt="VARIE" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">VARIE</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-12.jpg" alt="VARIE 2" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">VARIE 2</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-13.jpg" alt="VARIE 3" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">VARIE 3</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-14.jpg" alt="VARIE 4" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">VARIE 4</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-15.jpg" alt="VARIE 5" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">VARIE 5</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-16.jpg" alt="VARIE 6" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">VARIE 6</h5>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="../../assets/categoria-17.jpg" alt="VARIE 7" />
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5 has-text-centered">VARIE 7</h5>
        </div>
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
        cursor: pointer;
        background: transparent;
        box-shadow: none;
      }

      .card-image img {
        // min-height: 253px;
        border-radius: unset;
      }

      .card .card-content {
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.025rem;
        line-height: 1rem;
        color: #19110b;
        background-color: transparent;
      }
    `,
  ],
})
export class HomeComponent {
  constructor() {}
}

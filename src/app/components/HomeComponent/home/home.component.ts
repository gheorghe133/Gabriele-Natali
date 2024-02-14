import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-medium">
      <div class="hero-body has-text-centered">
        <p class="title is-1 has-text-dark">Gabriele Natali</p>
      </div>
    </section>

    <section class="section">
      <h3 class="title is-3 has-text-centered has-text-dark">Galleria</h3>

      <div class="container container-custom mt-3 mb-6">
        @for(category of categories; track $index){
        <div class="card fade-in" [routerLink]="['/categoria', category.route]">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                ngSrc="../../assets/Home Gallery/{{ category.route }}.jpg"
                alt="{{ category.name }}"
                loading="lazy"
                fill
              />
            </figure>
          </div>
          <div class="card-content">
            <h5 class="title is-5 has-text-centered">{{ category.name }}</h5>
          </div>
        </div>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        background: url('/assets/Home Gallery/acquerelli.jpg');
        background-size: cover;
        background-repeat: no-repeat;
      }

      .hero .title {
        font-family: 'Caveat', cursive;
      }

      .container-custom {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 1em 1em;
      }

      .card {
        cursor: pointer;
        background: transparent;
        box-shadow: none;
        opacity: 0;
      }

      .card-image img {
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

      .fade-in {
        animation: fadeInAnimation 1.5s ease forwards;
      }

      @keyframes fadeInAnimation {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `,
  ],
})
export class HomeComponent {
  categories = [
    { name: 'ACQUERELLI', route: 'acquerelli' },
    { name: 'AFORISMI', route: 'aforismi' },
    {
      name: 'DISEGNO CON (O SENZA) IMPEGNO',
      route: 'disegno-con-o-senza-impegno',
    },
    { name: 'Epopea Femminile', route: 'epopea-femminile' },
    { name: "Gli Indiani d'America", route: 'gli-indiani-d-america' },
    {
      name: 'La nouva generazione salva il mondo',
      route: 'la-nouva-generazione-salva-il-mondo',
    },
    { name: 'Omaggio a Pablo', route: 'omaggio-a-pablo' },
    { name: 'Rosso e Nero', route: 'rosso-e-nero' },
    { name: 'SERIE BACIO', route: 'serie-bacio' },
    { name: 'VARIE', route: 'varie' },
    { name: 'VARIE 2', route: 'varie-2' },
    { name: 'VARIE 3', route: 'varie-3' },
    { name: 'VARIE 4', route: 'varie-4' },
    { name: 'VARIE 5', route: 'varie-5' },
    { name: 'VARIE 6', route: 'varie-6' },
    { name: 'VARIE 7', route: 'varie-7' },
    { name: 'FUORI', route: 'fuori' },
  ];

  constructor() {}
}

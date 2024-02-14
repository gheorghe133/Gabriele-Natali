import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-medium">
      <div class="hero-body has-text-centered">
        <p class="title is-1 has-text-dark mt-2">Gabriele Natali</p>
      </div>
    </section>

    <h3 class="title is-3 has-text-centered has-text-dark mt-6">Galleria</h3>

    <div class="container container-custom mt-3 mb-6">
      @for(category of categories; track $index){
      <div class="card fade-in" [routerLink]="['/categoria', category.route]">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              ngSrc="../../assets/Home Gallery/categoria-{{ category.id }}.jpg"
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
  `,
  styles: [
    `
      .hero {
        background: url('/assets/Home Gallery/categoria-1.jpg');
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
    { id: 1, name: 'ACQUERELLI', route: 'acquerelli' },
    { id: 2, name: 'AFORISMI', route: 'aforismi' },
    {
      id: 3,
      name: 'DISEGNO CON (O SENZA) IMPEGNO',
      route: 'disegno-con-o-senza-impegno',
    },
    { id: 4, name: 'Epopea Femminile', route: 'epopea-femminile' },
    { id: 5, name: "Gli Indiani d'America", route: 'gli-indiani-d-america' },
    {
      id: 6,
      name: 'La nouva generazione salva il mondo',
      route: 'la-nouva-generazione-salva-il-mondo',
    },
    { id: 7, name: 'Omaggio a Pablo', route: 'omaggio-a-pablo' },
    { id: 8, name: 'Rosso e Nero', route: 'rosso-e-nero' },
    { id: 9, name: 'SERIE BACIO', route: 'serie-bacio' },
    { id: 10, name: 'VARIE', route: 'varie' },
    { id: 11, name: 'VARIE 2', route: 'varie-2' },
    { id: 12, name: 'VARIE 3', route: 'varie-3' },
    { id: 13, name: 'VARIE 4', route: 'varie-4' },
    { id: 14, name: 'VARIE 5', route: 'varie-5' },
    { id: 15, name: 'VARIE 6', route: 'varie-6' },
    { id: 16, name: 'VARIE 7', route: 'varie-7' },
    { id: 17, name: 'FUORI', route: 'fuori' },
  ];

  constructor() {}
}

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
      <h3 class="title is-3 has-text-centered has-text-dark">Autobiografia</h3>

      <div class="container container-about">
        <img src="../../assets/About/profile.jpg" />

        <div class="content has-text-dark has-text-justified">
          <p>
            Gabriele Natali nasce nel 1947 nel Polesine, da genitori contadini.
            Eredita dal padre, attivista politico, l’interesse per i problemi
            sociali. Frequenta l’Istituto d’Arte Dosso Dossi di Ferrara e poi
            l’Accademia di Belle Arti di Bologna, seguendo il corso di
            scenografia.
          </p>
          <p>
            Durante questo periodo, sotto la regia di Franco Parenti, lavora ad
            una edizione dell’opera teatrale “Il Bagno” di Majakovskij. Conclusa
            l’accademia nel ’68, si impegna come arredatore nell’industria, ma
            il rapporto di lavoro in questa realtà risulta per lui troppo
            limitativo: l’arredamento viene visto come decorativismo di
            carattere tecnico al servizio di scopi puramente commerciali.
          </p>
          <p>
            Il periodo grafico della fine anni ’70 ed inizio anni ’80 è il
            risultato dell’unione dell’esperienza acquisita nella pratica del
            disegno tecnico-decorativo con quella politico-sindacale del
            momento. Dal punto di vista artistico, egli si richiama al Goya de
            “Los Desastres de la Guerra”, ma anche ad un altro artista, che gli
            è contemporaneo, dotato della stessa capacità di sintesi critica:
            Forattini.
          </p>
          <p>
            L’aforisma è infatti lo strumento analitico ricorrente nella grafica
            di Natali. Espone in collettive e partecipa a numerose estemporanee.
            Ha allestito sue personali in Italia (Ficarolo,Torino, Ferrara,
            Este, Misano Adriatico, Bondeno, Luserna San Giovanni) e all’
            estero. Dagli anni ’90 a oggi, sente il bisogno di esprimersi
            principalmente con il colore, mantenendo sempre la costante della
            rapidità del tratto, vedi il periodo degli “Indiani d’America”.
          </p>
          <blockquote>
            “Il passo è breve, ed abbraccia pennelli e colori su tele, senza mai
            abbandonare quei piccoli colpi di matita, tanto sentiti.”
          </blockquote>
          <p>
            Natali ha affrontato il tema della Shoah a modo suo, inserendo
            l’esperienza storica personale trasmessagli dal padre stesso. Le
            problematiche femminili, i giovani nella natura, fatti di cronaca e
            personaggi sono i temi espressi nella sua produzione.
          </p>
        </div>
      </div>

      <div class="container gallery-container mt-6 mb-6">
        <ul class="masonry-gallery">
          <li><img src="../../assets/About/pic-1.jpg" /></li>
          <li><img src="../../assets/About/pic-2.jpg" /></li>
          <li><img src="../../assets/About/pic-3.jpg" /></li>
          <li><img src="../../assets/About/pic-4.jpg" /></li>
          <li><img src="../../assets/About/pic-5.jpg" /></li>
          <li><img src="../../assets/About/pic-6.jpg" /></li>
          <li><img src="../../assets/About/pic-7.jpg" /></li>
          <li><img src="../../assets/About/pic-8.jpg" /></li>
          <li><img src="../../assets/About/pic-9.jpg" /></li>
          <li><img src="../../assets/About/pic-10.jpg" /></li>
          <li><img src="../../assets/About/pic-11.jpg" /></li>
        </ul>
      </div>

      <h3 class="title is-3 has-text-centered has-text-dark mt-6">Galleria</h3>

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

      .container-about {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
      }

      .gallery-container ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .gallery-container ul li img {
        display: block;
        height: auto;
        max-width: 100%;
      }

      .gallery-container ul.masonry-gallery {
        columns: 12rem;
        column-gap: 1rem;
      }

      .gallery-container ul.masonry-gallery li {
        break-inside: avoid;
        margin: 0 0 1rem;
      }

      .gallery-container ul.mosaic-gallery {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -0.5rem;
      }

      .gallery-container ul.mosaic-gallery li {
        background-position: center center;
        background-size: cover;
        flex: auto;
        height: 15vw;
        margin: 0 0.5rem 1rem;
        max-height: 10rem;
      }

      .gallery-container ul.mosaic-gallery li img {
        height: 100%;
        opacity: 0;
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

      @media (max-width: 1200px) {
        .container-about {
          display: block;
        }

        .container-about img {
          width: 100%;
          margin-bottom: 20px;
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

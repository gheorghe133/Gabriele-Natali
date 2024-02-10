import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="buttons mt-2">
      <button class="button is-success is-light has-text-dark" routerLink="/">
        <span class="icon">
          <i class="fa-solid fa-arrow-left"></i>
        </span>
        <span>Indietro</span>
      </button>
    </div>

    <div class="container container-custom mt-4 mb-6">
      <div
        *ngFor="let image of images; let i = index"
        class="card fade-in"
        (click)="openModal(image)"
      >
        <div class="card-image">
          <figure class="image">
            <img [src]="image.src" [alt]="image.alt" loading="lazy" />
          </figure>
        </div>
      </div>
    </div>

    <div class="modal" [ngClass]="{ 'is-active': modalOpen }">
      <div class="modal-background" (click)="closeModal()"></div>
      <div class="modal-content">
        <p class="image">
          <img [src]="selectedImage?.src" [alt]="selectedImage?.alt" />
        </p>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        (click)="closeModal()"
      ></button>
    </div>
  `,
  styles: [
    `
      .container-custom {
        column-count: 2;
        column-gap: 1rem;
      }

      .card {
        width: calc(100% / 1);
        margin-bottom: 1rem;
        cursor: pointer;
        background: transparent;
        height: max-content;
        opacity: 0; /* Inițial setăm opacitatea la 0 */
      }

      .fade-in {
        animation: fadeInAnimation 2s ease forwards; /* Definim animația de fade-in */
      }

      @keyframes fadeInAnimation {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .card-image img {
        border-radius: unset;
      }

      @media (max-width: 700px) {
        .container-custom {
          column-count: 1;
        }
      }
    `,
  ],
})
export class GalleryComponent implements OnInit {
  images: { src: string; alt: string }[] = [];
  modalOpen: boolean = false;
  selectedImage: { src: string; alt: string } | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const category = params['id'];

      this.images = this.getImagesForCategory(category);
    });
  }

  openModal(image: { src: string; alt: string }) {
    this.selectedImage = image;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  getImagesForCategory(category: string): { src: string; alt: string }[] {
    switch (category) {
      case 'acquerelli':
        return [
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0021.jpg',
            alt: 'ACQUERELLI Image',
          },
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0022.jpg',
            alt: 'ACQUERELLI Image',
          },
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0023.jpg',
            alt: 'ACQUERELLI Image',
          },
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0024.jpg',
            alt: 'ACQUERELLI Image',
          },
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0025.jpg',
            alt: 'ACQUERELLI Image',
          },
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0026.jpg',
            alt: 'ACQUERELLI Image',
          },
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0027.jpg',
            alt: 'ACQUERELLI Image',
          },
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0028.jpg',
            alt: 'ACQUERELLI Image',
          },
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0029.jpg',
            alt: 'ACQUERELLI Image',
          },
          {
            src: '../../assets/Photos/ACQUERELLI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0030.jpg',
            alt: 'ACQUERELLI Image',
          },
        ];
      case 'aforismi':
        return [
          {
            src: '../../assets/Photos/AFORISMI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0003.jpg',
            alt: 'AFORISMI Image',
          },
          {
            src: '../../assets/Photos/AFORISMI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0004.jpg',
            alt: 'AFORISMI Image',
          },
          {
            src: '../../assets/Photos/AFORISMI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0005.jpg',
            alt: 'AFORISMI Image',
          },
          {
            src: '../../assets/Photos/AFORISMI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0006.jpg',
            alt: 'AFORISMI Image',
          },
          {
            src: '../../assets/Photos/AFORISMI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0007.jpg',
            alt: 'AFORISMI Image',
          },
          {
            src: '../../assets/Photos/AFORISMI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0008.jpg',
            alt: 'AFORISMI Image',
          },
          {
            src: '../../assets/Photos/AFORISMI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0009.jpg',
            alt: 'AFORISMI Image',
          },
          {
            src: '../../assets/Photos/AFORISMI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0010.jpg',
            alt: 'AFORISMI Image',
          },
        ];
      case 'disegno-con-o-senza-impegno':
        return [
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0057.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0058.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0059.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0060.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0061.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0062.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0063.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0064.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0065.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0066.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0067.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0068.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0069.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0070.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
          {
            src: '../../assets/Photos/DISEGNO CON (O SENZA) IMPEGNO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0071.jpg',
            alt: 'Photos/DISEGNO CON (O SENZA) IMPEGNO Image',
          },
        ];
      case 'epopea-femminile':
        return [
          {
            src: '../../assets/Photos/Epopea Femminile/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0078.jpg',
            alt: 'Epopea Femminile Image',
          },
          {
            src: '../../assets/Photos/Epopea Femminile/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0079.jpg',
            alt: 'Epopea Femminile Image',
          },
          {
            src: '../../assets/Photos/Epopea Femminile/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0080.jpg',
            alt: 'Epopea Femminile Image',
          },
          {
            src: '../../assets/Photos/Epopea Femminile/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0081.jpg',
            alt: 'Epopea Femminile Image',
          },
        ];
      case 'fuori':
        return [
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0270.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0271.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0272.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0273.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0274.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0275.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0276.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0277.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0278.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0279.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0280.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0281.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0282.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0283.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0284.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0285.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0286.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0287.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0288.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0289.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0290.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0291.jpg',
            alt: 'FUORI Image',
          },
          {
            src: '../../assets/Photos/FUORI/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0292.jpg',
            alt: 'FUORI Image',
          },
        ];
      case 'gli-indiani-d-america':
        return [
          {
            src: "../../assets/Photos/Gli Indiani d'America/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0032.jpg",
            alt: "Gli Indiani d'America Image",
          },
          {
            src: "../../assets/Photos/Gli Indiani d'America/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0033.jpg",
            alt: "Gli Indiani d'America Image",
          },
          {
            src: "../../assets/Photos/Gli Indiani d'America/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0034.jpg",
            alt: "Gli Indiani d'America Image",
          },
          {
            src: "../../assets/Photos/Gli Indiani d'America/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0035.jpg",
            alt: "Gli Indiani d'America Image",
          },
          {
            src: "../../assets/Photos/Gli Indiani d'America/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0036.jpg",
            alt: "Gli Indiani d'America Image",
          },
        ];
      case 'la-nouva-generazione-salva-il-mondo':
        return [
          {
            src: '../../assets/Photos/La nouva generazione salva il mondo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0103.jpg',
            alt: 'La nouva generazione salva il mondo Image',
          },
          {
            src: '../../assets/Photos/La nouva generazione salva il mondo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0104.jpg',
            alt: 'La nouva generazione salva il mondo Image',
          },
          {
            src: '../../assets/Photos/La nouva generazione salva il mondo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0105.jpg',
            alt: 'La nouva generazione salva il mondo Image',
          },
          {
            src: '../../assets/Photos/La nouva generazione salva il mondo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0106.jpg',
            alt: 'La nouva generazione salva il mondo Image',
          },
        ];
      case 'omaggio-a-pablo':
        return [
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0191.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0192.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0193.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0194.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0195.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0196.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0197.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0198.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0199.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0200.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0201.jpg',
            alt: 'Omaggio a Pablo Image',
          },
          {
            src: '../../assets/Photos/Omaggio a Pablo/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0202.jpg',
            alt: 'Omaggio a Pablo Image',
          },
        ];
      case 'rosso-e-nero':
        return [
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0133.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0134.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0135.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0136.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0137.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0138.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0139.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0140.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0141.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0142.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0143.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0144.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0145.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0146.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0147.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0148.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0149.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0150.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0151.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0152.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0153.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0154.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0155.jpg',
            alt: 'Rosso e Nero Image',
          },
          {
            src: '../../assets/Photos/Rosso e Nero/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0156.jpg',
            alt: 'Rosso e Nero Image',
          },
        ];
      case 'serie-bacio':
        return [
          {
            src: '../../assets/Photos/SERIE BACIO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0221.jpg',
            alt: 'SERIE BACIO Image',
          },
          {
            src: '../../assets/Photos/SERIE BACIO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0222.jpg',
            alt: 'SERIE BACIO Image',
          },
          {
            src: '../../assets/Photos/SERIE BACIO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0223.jpg',
            alt: 'SERIE BACIO Image',
          },
          {
            src: '../../assets/Photos/SERIE BACIO/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0224.jpg',
            alt: 'SERIE BACIO Image',
          },
        ];
      case 'varie':
        return [
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0038.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0039.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0040.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0041.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0042.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0043.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0044.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0045.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0046.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0047.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0048.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0049.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0050.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0051.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0052.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0053.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0054.jpg',
            alt: 'VARIE Image',
          },
          {
            src: '../../assets/Photos/VARIE/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0055.jpg',
            alt: 'VARIE Image',
          },
        ];
      case 'varie-2':
        return [
          {
            src: '../../assets/Photos/VARIE 2/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0073.jpg',
            alt: 'VARIE 2 Image',
          },
          {
            src: '../../assets/Photos/VARIE 2/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0074.jpg',
            alt: 'VARIE 2 Image',
          },
          {
            src: '../../assets/Photos/VARIE 2/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0075.jpg',
            alt: 'VARIE 2 Image',
          },
          {
            src: '../../assets/Photos/VARIE 2/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0076.jpg',
            alt: 'VARIE 2 Image',
          },
        ];
      case 'varie-3':
        return [
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0083.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0084.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0085.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0086.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0087.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0088.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0089.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0090.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0091.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0092.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0093.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0094.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0095.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0096.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0097.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0098.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0099.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0100.jpg',
            alt: 'VARIE 3 Image',
          },
          {
            src: '../../assets/Photos/VARIE 3/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0101.jpg',
            alt: 'VARIE 3 Image',
          },
        ];
      case 'varie-4':
        return [
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0108.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0109.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0110.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0111.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0112.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0113.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0114.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0115.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0116.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0117.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0118.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0119.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0120.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0121.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0122.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0123.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0124.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0125.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0126.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0127.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0128.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0129.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0130.jpg',
            alt: 'VARIE 4 Image',
          },
          {
            src: '../../assets/Photos/VARIE 4/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0131.jpg',
            alt: 'VARIE 4 Image',
          },
        ];
      case 'varie-5':
        return [
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0158.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0159.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0160.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0161.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0162.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0163.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0164.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0165.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0166.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0167.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0168.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0169.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0170.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0171.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0172.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0173.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0174.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0175.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0176.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0177.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0178.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0179.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0180.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0181.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0182.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0183.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0184.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0185.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0186.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0187.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0188.jpg',
            alt: 'VARIE 5 Image',
          },
          {
            src: '../../assets/Photos/VARIE 5/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0189.jpg',
            alt: 'VARIE 5 Image',
          },
        ];
      case 'varie-6':
        return [
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0204.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0205.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0206.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0207.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0208.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0209.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0210.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0211.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0212.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0213.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0214.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0215.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0216.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0217.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0218.jpg',
            alt: 'VARIE 6 Image',
          },
          {
            src: '../../assets/Photos/VARIE 6/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0219.jpg',
            alt: 'VARIE 6 Image',
          },
        ];
      case 'varie-7':
        return [
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0226.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0227.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0228.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0229.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0230.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0231.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0232.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0233.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0234.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0235.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0236.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0237.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0238.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0239.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0240.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0241.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0242.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0243.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0244.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0245.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0246.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0247.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0248.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0249.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0250.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0251.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0252.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0253.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0254.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0255.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0256.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0257.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0258.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0259.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0260.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0261.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0262.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0263.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0264.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0265.jpg',
            alt: 'VARIE 7 Image',
          },
          {
            src: '../../assets/Photos/VARIE 7/CATALOGO generale delle opere di GABRIELE NATALIdid_page-0266.jpg',
            alt: 'VARIE 7 Image',
          },
        ];
      default:
        return [];
    }
  }
}

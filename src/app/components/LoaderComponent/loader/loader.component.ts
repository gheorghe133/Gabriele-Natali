import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader-container">
      <div class="custom-loader"></div>
    </div>
  `,
  styles: [
    `
      .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        min-height: 80vh;
      }

      .custom-loader {
        border: 1px solid #fbbf24;
        width: 64px;
        height: 64px;
        position: relative;
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
      }

      .custom-loader:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 40px;
        height: 40px;
        transform: rotate(45deg) translate(30%, 40%);
        background: #fcd34d;
        box-shadow: 32px -34px 0 5px #fbbf24;
        animation: slide 2s infinite ease-in-out alternate;
      }

      .custom-loader:after {
        content: '';
        position: absolute;
        left: 10px;
        top: 10px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #ff3d00;
        transform: rotate(0deg);
        transform-origin: 35px 145px;
        animation: rotate 2s infinite ease-in-out;
      }

      @keyframes slide {
        0%,
        100% {
          bottom: -35px;
        }

        25%,
        75% {
          bottom: -2px;
        }

        20%,
        80% {
          bottom: 2px;
        }
      }

      @keyframes rotate {
        0% {
          transform: rotate(-15deg);
        }

        25%,
        75% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(25deg);
        }
      }
    `,
  ],
})
export class LoaderComponent {}
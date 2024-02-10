import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/HomeComponent/home/home.component';
import { GalleryComponent } from './components/GalleryComponent/gallery/gallery.component';
import { LoaderComponent } from './components/LoaderComponent/loader/loader.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GalleryComponent, LoaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

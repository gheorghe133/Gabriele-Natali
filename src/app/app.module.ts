import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/HomeComponent/home/home.component';
import { GalleryComponent } from './components/GalleryComponent/gallery/gallery.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GalleryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

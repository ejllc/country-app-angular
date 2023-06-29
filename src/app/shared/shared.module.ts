import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent
  ],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { RouterMainTitleComponent } from './router-main-title/router-main-title.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CardComponent,
  
    RouterMainTitleComponent,
       ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CarouselComponent,
    CardComponent,
    RouterMainTitleComponent, 
    ScrollToTopComponent
  ]
})
export class SharedModule { }

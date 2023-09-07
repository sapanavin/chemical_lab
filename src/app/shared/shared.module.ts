import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { RouterMainTitleComponent } from './router-main-title/router-main-title.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CardComponent,
  
    RouterMainTitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CarouselComponent,
    CardComponent,
    RouterMainTitleComponent
  ]
})
export class SharedModule { }

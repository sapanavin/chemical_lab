import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {


  // @ViewChild('mattoolbar')
  // scroll: HeaderComponent;
  
  constructor () {} 
  

  
//Refereerd from https://codetosolutions.com/blog/68/adding-a-scroll-to-top-button-in-angular
  scrollToTop() {

    (function smoothscroll() {

        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {

            window.requestAnimationFrame(smoothscroll);

            window.scrollTo(0, currentScroll - (currentScroll / 8));

        }

    })();
    console.log("i am clicked", document);

  }

}

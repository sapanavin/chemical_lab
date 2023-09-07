import { Component, ElementRef, Inject, Output, ViewChild } from '@angular/core';
import { SuperService } from 'src/app/services/super.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('myTestComp') sidebarComp: SidebarComponent;
  
  sidenav:any;
  constructor(){


  }
  ngAfterViewInit(): void {}

  toggle():void{
  this.sidebarComp.mytoggle();
}
  
}
  


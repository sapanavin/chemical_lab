import { Component, ElementRef, Inject, Output, ViewChild } from '@angular/core';
import { SuperService } from 'src/app/services/super.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuItem } from 'src/app/shared/interfaces/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('myTestComp') sidebarComp: SidebarComponent;
  
  sidenav:any;
  router:Router;
  menuItems: MenuItem[] = [
    {
      label: "Home",
      link: "/home",
      icon: "login"
    },
    {
      label: "NTD Drug Discovery",
      link: "/ntddrug",
      icon: "help",
    },
    {
      label: "Contacts",
      link: "/contacts",
      icon: "attach_money",
    },
    {
      label: "Publications and Patents",
      link: "/publications",
      icon: "notes",
    },
    {
      label: "Collaborate",
      link: "/collaborate",
      icon: "slideshow",
    },
    {
      label: "Supporters",
      link: "/supporters",
      icon: "rss_feed",
    },
    
  ];

  constructor(router: Router){
    this.router=router;
   }
  ngAfterViewInit(): void {}

  toggle():void{
  this.sidebarComp.mytoggle();
}
testLink(event:MenuItem):void{
  console.log(event.link);
 this.router.navigateByUrl(event.link);
console.log(` clicked inside testLink event`);
}
}
  


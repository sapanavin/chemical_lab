import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { SuperService } from 'src/app/services/super.service';
import { ScrollToTopComponent } from 'src/app/shared/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
 @ViewChild(`sidenav`) sidenav:any;
@ViewChild(`routerScrolltoTop`) routerScrolltoTop:any;


title:string="at the end";
  constructor(private observer: BreakpointObserver,
                private router: Router) {}

      
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }


  ngAfterViewInit() {
    this.observer.observe(["(max-width: 960px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }

  mytoggle():void{
    console.log(`mytoggle works`);
    console.log(`this.sidenav.mode ${this.sidenav.mode}`);

    if (this.sidenav.mode === "side") {
      this.sidenav.mode = "over";
      this.sidenav.close();
      
    } 
    else{
      if (this.sidenav.mode === "over") {
        this.sidenav.mode = "side";
          this.sidenav.open();
         
      } 
    }
    
  }

  scrollme(event:any) {

    
  }
}

import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('myTestComp') sidebarComp: SidebarComponent;
  title = 'frontend_chemical_lab';


  toggle():void{
    this.sidebarComp.mytoggle();
  }
}

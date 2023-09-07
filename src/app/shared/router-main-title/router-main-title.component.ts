import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-router-main-title',
  templateUrl: './router-main-title.component.html',
  styleUrls: ['./router-main-title.component.css']
})
export class RouterMainTitleComponent {
  @Input() title:string;
}

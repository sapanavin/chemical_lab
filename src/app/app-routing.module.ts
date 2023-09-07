import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PhotoGallaryComponent } from './components/photo-gallary/photo-gallary.component';
import { PublicationsPatentsComponent } from './components/publications-patents/publications-patents.component';

const routes: Routes = [
 
  
  { path:  'home', component:  HomeComponent},
  { path:  'publications', component:  PublicationsPatentsComponent},
  { path:  'slide', component:  PhotoGallaryComponent}
   /*,
  { path:  '**', component:  AppComponent}
  { path:  '', component:  AppComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {CdkMenuModule} from '@angular/cdk/menu';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule }from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MaterialRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule,
     FormsModule,
     CdkMenuModule,
     MatMenuModule,
     MatSidenavModule,
     MatDividerModule,
     MatListModule,
     LayoutModule,
     MatExpansionModule,
     MatCardModule 
  ]
})
export class MaterialModule { }

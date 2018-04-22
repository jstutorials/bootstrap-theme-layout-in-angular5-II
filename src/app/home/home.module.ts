import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule,ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
  
  ],
  declarations: [
  	HomeComponent
  ]
})
export class HomeModule { }

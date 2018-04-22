import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';
import {SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import {HeaderComponent } from './shared/layout/Header/header.component';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';

export const AppRoutes: Routes = [


	{ 
        path: '', 
        component: LoginLayoutComponent,
        children: [
          { path: '', component: LoginComponent, pathMatch: 'full'},
          { path: 'login', component: LoginComponent }
          
        ]
	},
	{ 
        path: '', 
        component: HomeLayoutComponent,
        children: [
          { path: 'home', component: HomeComponent, pathMatch: 'full'}
        
          
        ]
    },
    { path: '**', redirectTo: '' }
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
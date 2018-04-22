import { NgModule,ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    LoginLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    HomeModule,
    
	  routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
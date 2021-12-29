import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ControllerComponent } from './controller/controller.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    MenuComponent,
    ControllerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ControllerComponent]
})
export class AppModule { }

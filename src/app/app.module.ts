import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopHeaderComponent,
    NavBarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

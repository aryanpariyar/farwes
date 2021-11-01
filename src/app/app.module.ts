import { PartnersImageComponent } from './partners-image/partners-image.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CheckoutBtnComponent } from './checkout-btn/checkout-btn.component';
import { ImagesComponent } from './images/images.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { HeadingComponent } from './carousel items/heading.component';
import { PartnersComponent } from './partners/partners.component';
import { MoreComponent } from './more/more.component';
import { TextItemsComponent } from './text-items/text-items.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { GammerSectionComponent } from './gammer-section/gammer-section.component';
import { TextSectionComponent } from './text-section/text-section.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { DemoCompComponent } from './demo-comp/demo-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CheckoutBtnComponent,
    ImagesComponent,
    CarouselComponent,
    HeadingComponent,
    PartnersComponent,
    HomeComponent,
    MoreComponent,
    TextItemsComponent,
    TopSectionComponent,
    GammerSectionComponent,
    TextSectionComponent,
    CarouselSliderComponent,
    PartnersImageComponent,
    DemoCompComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

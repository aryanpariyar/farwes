import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css']
})
export class CarouselSliderComponent {


  slides = [
    {img: "../../assets/images/creatu.jpg"},
    {img: "../../assets/images/farwes-esports.png"},
    {img: "../../assets/images/farwes.png"},
    {img: "../../assets/images/farwes-job.jpg"},
    {img: "../../assets/images/edutech.jpg"},
    // {img: "../../assets/images/group-study.png"},
    // {img: "../../assets/images/lyrics-region.jpg"}
   
  ];

  
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};

}

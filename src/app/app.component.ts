import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MindComponent } from './mind/mind.component';
import { ViewvideoComponent } from './viewvideo/viewvideo.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { FooterComponent } from './footer/footer.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterOutlet,
    HeaderComponent,
    MindComponent,
    ViewvideoComponent,
    CarrouselComponent,
    AdvantageComponent,
    TestimonyComponent,
    FooterComponent,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingpage';

  nbTestamies = 2;
  nbAdvantages = 6;
  nbCarrouselsImages = 6;

  listAdvantage =[
    {
    title:"Lorem ipsum 1",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,"
  },{
    title:"Lorem ipsum 2",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,"
  },
  {
    title:"Lorem ipsum 3",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,"
  },
  {
    title:"Lorem ipsum 4",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,"
  }, 
  {
    title:"Lorem ipsum 5",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,"
  },
  {
    title:"Lorem ipsum 6",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit,"
  }
  
  ]
}

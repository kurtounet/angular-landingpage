import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule,  } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
title ="LOGO";
listImage = [
  "../../assets/image/Facebook.png",
  "../../assets/image/twitter.png",
  "../../assets/image/gmail.jpg",
]

}

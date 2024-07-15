import { Component } from '@angular/core';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.css'
})
export class TestimonyComponent {
  nbTestomies = 2;

  url = "../../assets/image/imageTestamonial.png";
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet purus nec lacus auctor iaculis. Quisque ullamcorper diam sed massa efficitur, ut egestas ipsum vulputate. Aenean pretium at lorem a consequat.";
}

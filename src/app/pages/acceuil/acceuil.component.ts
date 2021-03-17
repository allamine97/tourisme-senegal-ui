import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  //1400px * 687 px
   
  slides = [
    {image: 'assets/images/culture.jpg'},
    {image: 'assets/images/tourisme-1.png'}
    //{image: 'assets/images/culture-1.png'}
  ];
  showIndicator = true;
 
  switchIndicator(): void {
    this.showIndicator = !this.showIndicator;
  }

}

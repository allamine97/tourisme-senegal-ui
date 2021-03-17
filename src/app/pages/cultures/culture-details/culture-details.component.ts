import { Component, OnInit } from '@angular/core';
import { CulturesService } from 'src/app/services/cultures.service';

@Component({
  selector: 'app-culture-details',
  templateUrl: './culture-details.component.html',
  styleUrls: ['./culture-details.component.css']
})
export class CultureDetailsComponent implements OnInit {

  constructor(private cultureS:CulturesService) { }

  ngOnInit(): void {

  }
  
  getCulture(id){   
    this.cultureS.getCulture(id).subscribe(
      (response: any) => {
        console.log(response)
      },
        error => {
        });

  }

}

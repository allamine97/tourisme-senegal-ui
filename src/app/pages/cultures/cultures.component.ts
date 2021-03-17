import { Component, OnInit } from '@angular/core';
import { CulturesService } from 'src/app/services/cultures.service';
import { ShareServiceService } from 'src/app/services/share-service.service';

@Component({
  selector: 'app-cultures',
  templateUrl: './cultures.component.html',
  styleUrls: ['./cultures.component.css']
})
export class CulturesComponent implements OnInit {
  public cultures :any=[]
  constructor(public shareS:ShareServiceService,private cultureService:CulturesService) { }

  ngOnInit(): void {
    this.getAllCultures()
  }
  getAllCultures() {

    this.cultureService.getAllCultures().subscribe(
      (response: any) => {
      this.cultures= response;
       console.log('hello',this.cultures);
      },
        error => {
          console.log(error)
        });
  }
  
  getCulture(id){
     
    this.cultureService.getCulture(id).subscribe(
      (response: any) => {
        console.log(response);
      },
        error => {
        });

  }

}

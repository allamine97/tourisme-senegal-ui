import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from 'src/app/services/share-service.service';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-tourisme',
  templateUrl: './tourisme.component.html',
  styleUrls: ['./tourisme.component.css']
})
export class TourismeComponent implements OnInit {
  public sites :any =[]
  constructor(public shareService:ShareServiceService,private siteService:SitesService) { }

  ngOnInit(): void {
     this.getAllSite()
  }


  getAllSite() {

    this.siteService.getAllSites().subscribe(
      (response: any) => {
      this.sites= response;
       console.log('hello',this.sites);
      },
        error => {
          console.log(error)
        });
  }
  
  getSite(id){
     
    this.siteService.getSite(id).subscribe(
      (response: any) => {
        //this.sites= response.tailleurs;
        console.log(response);
      },
        error => {
        });

  }

}

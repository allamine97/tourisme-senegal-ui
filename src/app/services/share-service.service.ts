import { Injectable } from '@angular/core';
import { CulturesService } from './cultures.service';
import { PersonnalitesService } from './personnalites.service';
import { SitesService } from './sites.service';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  //public sites :any =[]
  //public cultures :any =[]
  //public personnalites :any=[]

  constructor(public siteService:SitesService,private cultureService:CulturesService,private personnaliteService:PersonnalitesService) { }
  /*
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
*/


}

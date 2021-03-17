import { Component, OnInit } from '@angular/core';
import { PersonnalitesService } from 'src/app/services/personnalites.service';

@Component({
  selector: 'app-personnalites',
  templateUrl: './personnalites.component.html',
  styleUrls: ['./personnalites.component.css']
})
export class PersonnalitesComponent implements OnInit {
  persons:any=[]
  constructor(private personS:PersonnalitesService) { }

  ngOnInit(): void {
    this.getAllPersons()
  }

  
  getAllPersons() {

    this.personS.getAllPersonnalites().subscribe(
      (response: any) => {
      this.persons= response;
       console.log('hello',this.persons);
      },
        error => {
          console.log(error)
        });
  }
  
  getPersons(id){
     
    this.personS.getPersonnalite(id).subscribe(
      (response: any) => {
        //this.sites= response.tailleurs;
        console.log(response);
      },
        error => {
        });

  }

}

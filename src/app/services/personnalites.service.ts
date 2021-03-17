import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as URL from '../../assets/app.url';
import {backendUrl} from '../../assets/app.url';
@Injectable({
  providedIn: 'root'
})
export class PersonnalitesService {

  
  host: string = backendUrl;

  constructor(private http: HttpClient) {
  }

  getAllPersonnalites(){
    return this.http.get(this.host + '/persons');
    
  }

  getPersonnalite(id){
    return this.http.get(backendUrl + '/persons/' + id );

  }
  


}

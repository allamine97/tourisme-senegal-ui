import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as URL from '../../assets/app.url';
import {backendUrl} from '../../assets/app.url';
@Injectable({
  providedIn: 'root'
})
export class CulturesService {

  host: string = backendUrl;

  constructor(private http: HttpClient) {
  }

  getAllCultures(){
    return this.http.get(this.host + '/cultures');
    
  }

  getCulture(id){
    return this.http.get(backendUrl + '/cultures/' + id );

  }
  
  

}

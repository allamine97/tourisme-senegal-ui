import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as URL from '../../assets/app.url';
import {backendUrl} from '../../assets/app.url';
@Injectable({
  providedIn: 'root'
})
export class SitesService {

  host: string = backendUrl;

  constructor(private http: HttpClient) {
  }

  getAllSites(){
    return this.http.get(this.host + '/sites');
    
  }

  getSite(id){
    return this.http.get(backendUrl + '/sites/' + id );

  }

}

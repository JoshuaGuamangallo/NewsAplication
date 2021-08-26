import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { RemotePlus } from '../modules/remote-plus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionApiNetService {

  url = "/api/news";
  list: RemotePlus[];

  constructor(private http: HttpClient) { }

  getApiNews() {
    
    this.http.get(this.url).toPromise()
    .then(data =>{
      this.list = data as RemotePlus[];
    } )
  }

  
}

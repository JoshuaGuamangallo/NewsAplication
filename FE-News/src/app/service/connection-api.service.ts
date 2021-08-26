import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiGNews, articles } from '../modules/api-gnews';


@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {

  private configUrl: string;
  constructor(private http: HttpClient) { }

  getApiNews(): Observable<ApiGNews>{
    this.configUrl=`${environment.apiURL}`;
    const data = this.http.get<ApiGNews>(this.configUrl);
    return data;
  }
}

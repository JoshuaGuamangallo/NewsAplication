import { Component, OnInit } from '@angular/core';
import { ApiGNews } from '../modules/api-gnews';
import { ConnectionApiService } from '../service/connection-api.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {

  api: ApiGNews;
  
  constructor(private service: ConnectionApiService) {  }

  ngOnInit(): void {
    this.getDataNews();
  }
  
  getDataNews() {
    this.service.getApiNews().subscribe((data: ApiGNews) => {
      console.log('subscribe apod', data);
      this.api = data;
    });
  }

}

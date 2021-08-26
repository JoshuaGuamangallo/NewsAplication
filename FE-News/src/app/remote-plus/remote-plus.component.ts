import { ConnectionApiNetService } from './../service/connection-api-net.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote-plus',
  templateUrl: './remote-plus.component.html',
  styleUrls: ['./remote-plus.component.scss']
})
export class RemotePlusComponent implements OnInit {

  
  constructor(public service: ConnectionApiNetService) {  }

  ngOnInit(): void {
    this.service.getApiNews();
  }


}

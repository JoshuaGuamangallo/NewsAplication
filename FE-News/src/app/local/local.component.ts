import { Local } from './../modules/local';
import { LocalStorageService } from './../service/local-storage.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  data: Local[];

  constructor(public service: LocalStorageService) { }

  ngOnInit() 
  {
    this.data = this.service.getNews();
  }




}

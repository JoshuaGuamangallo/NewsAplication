import { Local } from './../modules/local';
import { LocalStorageService } from './../service/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: Local[];

  constructor(public service: LocalStorageService) { }

  ngOnInit() 
  {
    this.data = this.service.getNews();
  }

  addArticle(newTitle: HTMLInputElement, newDescription: HTMLInputElement, newImage: HTMLInputElement){
    this.service.addNews({
      title: newTitle.value,
      description: newDescription.value,
      image: newImage.value
    });
    newTitle.value ='';
    newDescription.value = '';
    newImage.value = '';
    return false;

  }

  deleteArticle(title){
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i].title == title) {
          this.data.splice(i, 1);
          
      }
      this.service.deleteNews(title);
    }
    
  }

}

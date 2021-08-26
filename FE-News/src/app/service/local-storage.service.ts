import { Local } from './../modules/local';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage: Local[];
  constructor() { 

  }

  addNews(local: Local){
    let data = JSON.parse(localStorage.getItem('news') || '[]');
    data.push(local);
    localStorage.setItem('news', JSON.stringify(data));
    (typeof data);
    data = this.storage;

  }

  getNews(){
    let data = JSON.parse(localStorage.getItem('news'));
    return data;
  }

  deleteNews(title){
    let data = JSON.parse(localStorage.getItem('news'));

    for(let i = 0; i <data.length; i++) {
     if(data[i].title == title) {
      data.splice(i, 1);
     
     }
     localStorage.setItem('news', JSON.stringify(data));
  }
     
  }

  
}

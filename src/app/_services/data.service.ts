import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()

export class DataService {
  hola = 'hola';
  data = [];

  constructor(private http : HttpClient,) {
  //  this.setData();
  }

  getData(){
    var url = 'http://201.239.15.63:5000';

    return this.http.get<any[]>(`${url}/portalinmobiliario/`, {
      headers: new HttpHeaders()
       .set('Content-Type','application/json')
     });
  }
/*
  setData(){
    this.getData().subscribe(result => {
     this.data = result;
     console.log('dataServicio:',this.data);
   });
  }
*/
}

import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-objectifs',
  templateUrl: './objectifs.page.html',
  styleUrls: ['./objectifs.page.scss'],
})
export class ObjectifsPage implements OnInit {

  public obj:any;

  constructor(public http:HttpClient) { }

  ngOnInit() {

    this.getCurrentObjectif();

  }


  getCurrentObjectif(){

    let url="http://127.0.0.1:8000/objective";
    let header= new HttpHeaders({"Content-type":"application-json"}); //Bearer à ajouter


    return this.http.post(url,[],{headers:header}).subscribe(data => {
      this.obj=data;
      console.log(this.obj);

    }, error => {
      console.log(error);
    });
  }

}

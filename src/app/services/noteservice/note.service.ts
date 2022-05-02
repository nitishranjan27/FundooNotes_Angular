import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService:HttpService) { }

  getallnotes(){

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json'
     })
   }
   return this.httpService.getService('Notes/GetAll',true,header)

  }

}

import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
token:any;
  constructor(private httpService:HttpService) { 
    this.token= localStorage.getItem('token')
  }
   
  getallnotes(){

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json',
       'Authorization': 'Bearer '+this.token 
     })
   }
   return this.httpService.getService('Notes/GetAll',true,header)

  }

}

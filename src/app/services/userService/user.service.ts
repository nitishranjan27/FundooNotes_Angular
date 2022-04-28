import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  Registration(reqdata:any){
    let header = {
      headers:new HttpHeaders({
      'Content-type':'application/json'
      })
      }
      return this.httpService.postService("User/Register",reqdata,false,header)
  }
}

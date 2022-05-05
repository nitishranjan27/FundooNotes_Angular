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
  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService("User/Login",reqdata,false,header)
  }
  forgot(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService("User/ForgotPassword?email="+reqdata.email,{},false,header)
  }
  reset(reqdata:any,token:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+token 
        
      })
    }
    return this.httpService.putService("User/ResetPassword",reqdata,true,header)
  }
}



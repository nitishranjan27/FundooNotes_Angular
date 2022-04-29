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
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJuaXRpc2hya3JhbmphbkBnbWFpbC5jb20iLCJJZCI6IjEiLCJleHAiOjE2NTEyMzYyODR9.5_HzfQyTdTXwidzejIYkEWxODCIDyu5BkqAHajBxFy8'
        
      })
    }
    return this.httpService.postService("User/ResetPassword",reqdata,true,header)
  }
}



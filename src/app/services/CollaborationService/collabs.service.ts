import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CollabsService {

  token:any;

  constructor(private httpService:HttpService) {
    this.token = localStorage.getItem('token');
   }

   AddCollabs(reqdata:any,id:any){
     console.log(reqdata,id)
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
         'Authorization': 'Bearer '+this.token 
      })
    }
    return this.httpService.postService("Collabs/Add",{collabEmail:reqdata,noteId:id},true,header)
   }
}

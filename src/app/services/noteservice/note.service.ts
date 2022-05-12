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
  createnote(data:any){
    // console.log("token",this.token);

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token 
     })
   }
   return this.httpService.postService('Notes/Create',data,true,header)
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
  updatenote(data:any,id:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': `Bearer  ${this.token}`
      })
  }
  return this.httpService.putService("Notes/Update?NoteId="+ id, data, true, header)
}
trashnotes(id:any){

let header ={
  headers: new HttpHeaders({
    'Content-type': 'application/json',
      'Authorization':`Bearer  ${this.token}`
  })
}
return this.httpService.putService("Notes/IsTrash?NotesId="+id,{},true,header)
}
archiveNotes(id:any){

  let headersOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer  ${this.token}`		
    })

  }
  return this.httpService.putService("Notes/IsArchive?NoteId="+id,{},true,headersOption)
}
ColorNote(id:any, data:any){
console.log(id,data.color)
  let headersOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer  ${this.token}`		
    })

  }
  return this.httpService.putService("Notes/Color",{noteId:id,addcolor:data.color},true,headersOption)

}
UploadPicture(image:any,id:any){
  let headersOption = {
    headers: new HttpHeaders({
      // 'Content-type': 'application/json',
      'Authorization': `Bearer  ${this.token}`		
    })
  }
  return this.httpService.putService("Notes/UpdateImage/"+id,image,true,headersOption)
}
}

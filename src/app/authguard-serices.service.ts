import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardSericesService {

  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
}

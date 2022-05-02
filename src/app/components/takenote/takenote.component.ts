import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  takenote!:NgForm;

  public notelist :boolean=false;
  description:string = ""
  title:string=""

  constructor() { }

  ngOnInit(): void {
  }
  noteClick(){
    
    this.notelist = true
    
  }
  noteClose(){
    
    this.notelist = false
    console.log(this.title, this.description);
    if((this.title==null||this.title=="") && (this.description==null||this.description=="")){
      console.log("values are null");
    }
   
  }
}


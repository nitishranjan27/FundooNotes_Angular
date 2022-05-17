import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollabsService } from 'src/app/services/CollaborationService/collabs.service';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {
  noteId:any;
  email:any;
  firstName:any;
  lastName:any;
  OwnerEmail:any;

  constructor(private collab: CollabsService,public dialogRef: MatDialogRef<CollaborationComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      this.noteId=data.noteId;  
      this.firstName = localStorage.getItem('firstName');
      this.lastName = localStorage.getItem('lastName')
      this.OwnerEmail = localStorage.getItem('email');
    }

  ngOnInit(): void {
    // this.Email = localStorage.getItem('Email');
  }
   addCollab(){
     console.log("collabs continue")
     this.collab.AddCollabs(this.email,this.noteId).subscribe((response:any) => {
      console.log("collab insert",response);
     })
     
   }
   close() {
    this.dialogRef.close();
  }
}

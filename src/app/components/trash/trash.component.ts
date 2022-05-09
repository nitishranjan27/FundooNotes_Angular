import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList : any;

  constructor(public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit(): void {
    this.getTrashList();
  }
  getTrashList(){
    this.noteService.getallnotes().subscribe((res: any) => {
      console.log(res);
      //  this.trashList=res
       this.trashList = res.data.filter((object: any) => {
        return object.isDeleted === true;
      })
     
    })

    }
    receiveMessagefromdisplaycard($event: any) {
      console.log("insidegetallnotes", $event);
      this.getTrashList();

  }

}

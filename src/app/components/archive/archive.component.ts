import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';



@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveList: any;

  constructor(public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit(): void {
    this.getArchiveList();
  }
  getArchiveList() {
    this.noteService.getallnotes().subscribe((res: any) => {
      console.log(res);
       this.archiveList=res
       this.archiveList = res.data.filter((object: any) => {
        return object.isArchived === true;
      })
     
    })

    }
    receiveMessagefromdisplaycard($event: any) {
      console.log("inside get all notes", $event);
      this.getArchiveList();

  }

}
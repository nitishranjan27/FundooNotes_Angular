import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  @Output() createToGetAllNotes = new EventEmitter<any>()
  takenote!: NgForm;

  public notelist: boolean = false;
  // body:string = ""
  // title:string=""

  title: string = ""
  body: string = ""
  isDeleted: boolean = false
  isPinned: boolean = false
  isArchived: boolean = false
  color: string = ""
  bgImage: string = "image1.jpg"
  reminder: string = "2022-05-04T17:17:25.717Z"
  createdAt: string = "2022-05-04T17:17:25.717Z"
  modifiedAt: string = "2022-05-04T17:17:25.717Z"

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }
  noteClick() {

    this.notelist = true

  }
  noteClose() {

    this.notelist = false
    console.log(this.title, this.body);
    if ((this.title == null || this.title == "") && (this.body == null || this.body == "")) {
      console.log("values are null");
    }
    else {
      let data = {
        title: this.title,
        body: this.body,
        isDeleted: this.isDeleted,
        isPinned: this.isPinned,
        isArchived: this.isArchived,
        color: this.color,
        bgImage: this.bgImage,
        reminder: this.reminder,
        createdAt: this.createdAt,
        modifiedAt: this.modifiedAt
      }
      this.noteService.createnote(data).subscribe((res: any) => {
        console.log(res);
        this.title=""
        this.body=""
        this.createToGetAllNotes.emit(res);
      })
    
  }
}
}


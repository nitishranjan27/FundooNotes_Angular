import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  @Output() noteUpdated = new EventEmitter<any>();
  Title: any
  Body: any
  NoteId: any

  constructor(private noteService: NoteService, public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      console.log(data);
      this.Title = data.title
      this.Body = data.body
      this.NoteId = data.noteId }

  ngOnInit(): void {
  }
  onClose() {
    let reqData = {
      Title: this.Title,
      Body: this.Body,
    }
    console.log('updated', reqData, this.NoteId);

    this.noteService.updatenote(reqData, this.NoteId).subscribe((res) => {
      console.log(res);
      this.Title = ''
      this.Body = ''
      this.noteUpdated.emit(res);
       
    })
    this.dialogRef.close()
  }

}
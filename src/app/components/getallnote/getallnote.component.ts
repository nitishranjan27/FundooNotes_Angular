import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }
  getallnotes(){
    this.note.getallnotes().subscribe((res:any)=> {
      console.log(res);
    })
  }

}

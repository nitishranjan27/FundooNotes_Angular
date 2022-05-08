import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  @Input() noteObject:any
  @Output() iconstodisplay = new EventEmitter<string>();

  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }
  onDelete(){
    console.log('Moved to Trash');
    this.noteId=[this.noteObject.noteId]
    this.note.trashnotes(this.noteId).subscribe((res:any) => {
      console.log(res);
      this.iconstodisplay.emit(res)
    
    })
  }
  onArchive(){
    this.noteId=[this.noteObject.noteId]
    console.log(' Note Archived');

    this.note.archiveNotes(this.noteId).subscribe((res:any) =>{
      console.log(res);
      this.iconstodisplay.emit(res)
      
    })
    
  }

}

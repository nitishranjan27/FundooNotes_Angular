import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  color:any
  @Input() noteObject:any
  @Output() iconstodisplay = new EventEmitter<string>();
  colorarray = ['#fff', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa'];

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
  setColor(Color:any){
    this.noteId=[this.noteObject.notesId]
    let data = {
      color : Color
    }
    this.note.ColorNote(this.noteId,data).subscribe((result: any) => {
      console.log(result); 
      this.iconstodisplay.emit(result)

  })
}

}

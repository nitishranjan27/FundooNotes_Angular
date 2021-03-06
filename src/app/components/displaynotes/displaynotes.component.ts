import { COMPILER_OPTIONS, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { DataService } from 'src/app/services/DataService/data.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  sentmsg: any;
  searchNote:any;
  @Input() childMessage: any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes=new EventEmitter<string>();
  constructor(public dialog: MatDialog,private data : DataService,private note:NoteService) { }

  ngOnInit(): void {
    // console.log(this.childMessage);
    this.data.incomingData.subscribe((res) => {
      console.log("Searching Process",res)
      this.searchNote = res;
    })
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
     width: '550px',
     data:note
     });
     dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed'); 
     this.recievefromiconstodisplaycard(result)
      // this.noteUpdated.emit(result);
     });
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay");
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }
  onPinned(note:any){
    note.isPinned = !note.isPinned
    this.note.notePinned(note.noteId).subscribe((response: any) => {
       console.log("Note Pinned Successfully",response)
       this.noteUpdated.emit(response)
    }) 

  }

}

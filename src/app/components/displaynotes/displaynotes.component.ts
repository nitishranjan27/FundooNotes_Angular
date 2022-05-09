import { COMPILER_OPTIONS, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  sentmsg: any;
  @Input() childMessage: any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes=new EventEmitter<string>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.childMessage);
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

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { CollaborationComponent } from '../collaboration/collaboration.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  color:any
  SelectedFile = null;
  url = '';
  @Input() noteObject:any
  @Output() iconstodisplay = new EventEmitter<string>();
  colorarray = ['#fff', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa'];

  constructor(public dialog: MatDialog,private note: NoteService) { }

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
    console.log(Color)
    this.noteObject.color=Color
    this.noteId=this.noteObject.noteId
    let data = {
      color : Color
    }
    this.note.ColorNote(this.noteId,data).subscribe((result: any) => {
      console.log(result); 
      this.iconstodisplay.emit(result)

  })
}

onFileSelected(event:any){
    console.log(event);
    this.SelectedFile = event.target.files[0];
    if (event.target.files && event.target.files[0]){
      this.onUpload(this.SelectedFile)
    }
}
onUpload(file:any){
  console.log(file);
      const imagefile = new FormData();
      imagefile.append('imageURL',file)

     this.note.UploadPicture(imagefile, this.noteObject.noteId).subscribe((response: any) => {
       console.log("Image Uploaded",response)
      this.iconstodisplay.emit(response)
     })
    }
    onDeleteImage(){
      if(this.noteObject.bgImage !=null){
        console.log("note image")
            this.note.DeletePicture(this.noteObject.noteId).subscribe((response: any) => {
              console.log("image deleted successfully",response)
              this.iconstodisplay.emit(response)
            })
      }
    }
    openDialog(note:any): void {
      const dialogRef = this.dialog.open(CollaborationComponent, {
       width: '550px',
       data:note
       });
       dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed'); 
      //  this.recievefromiconstodisplaycard(result)
        // this.noteUpdated.emit(result);
       });
    }

}

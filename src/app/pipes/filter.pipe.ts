import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchNote: string){
    console.log(searchNote)
    if (searchNote === ''){
      return value;
    }
    const Message = [];
    for(const note of value){
      if(note.title.toLocaleLowerCase().includes(searchNote) || note.body.toLocaleLowerCase().includes(searchNote)){
        Message.push(note)
      }
    }
    return Message;
  }

}

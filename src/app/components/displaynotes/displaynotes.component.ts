import { COMPILER_OPTIONS, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() childMessage: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.childMessage);
  }

}

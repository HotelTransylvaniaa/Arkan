import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-citycard',
  templateUrl: './citycard.component.html',
  styleUrls: ['./citycard.component.scss']
})
export class CitycardComponent implements OnInit {
  @Input() cityItem : any; 
  constructor() { }

  ngOnInit(): void {
  }

}

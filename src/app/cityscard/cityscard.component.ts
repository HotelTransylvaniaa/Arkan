import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-cityscard',
  templateUrl: './cityscard.component.html',
  styleUrls: ['./cityscard.component.scss']
})
export class CityscardComponent implements OnInit {
  @Input() cityItem : any; 
  constructor() { }

  ngOnInit(): void {
  }

}

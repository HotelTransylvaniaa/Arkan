import { Component, OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citycard',
  templateUrl: './citycard.component.html',
  styleUrls: ['./citycard.component.scss']
})
export class CitycardComponent implements OnInit {
  @Input() cityItem : any; 
  
  constructor(private router : Router) {}

  ngOnInit(): void {  }

  navigateToprojectDetails(){
    this.router.navigate(['/projects' , this.cityItem.id])
  }

}

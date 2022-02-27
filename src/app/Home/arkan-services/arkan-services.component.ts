import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-arkan-services',
  templateUrl: './arkan-services.component.html',
  styleUrls: ['./arkan-services.component.scss']
})
export class ArkanServicesComponent implements OnInit {
@Input () Service:any
  constructor() { }

  ngOnInit(): void {
  }

}

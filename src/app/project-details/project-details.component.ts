import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitysSectionComponent } from '../citys-section/citys-section.component'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectDetails : any ;
  @Input()citys : any;
  constructor(private activatedRoute : ActivatedRoute) {
    const activeID = this.activatedRoute.snapshot.params['id']
    // this.projectDetails = citys.find(city => city.id == activeID);
    console.log(this.projectDetails)
  }
  ngOnInit(): void {
  }

}

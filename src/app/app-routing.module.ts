import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CitycardComponent } from './citycard/citycard.component';
import { CitysSectionComponent } from './citys-section/citys-section.component';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: '',
        component: CitysSectionComponent
      },
      {
        path: ':id',
        component: ProjectDetailsComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

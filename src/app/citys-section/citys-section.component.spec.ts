import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitysSectionComponent } from './citys-section.component';

describe('CitysSectionComponent', () => {
  let component: CitysSectionComponent;
  let fixture: ComponentFixture<CitysSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitysSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitysSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

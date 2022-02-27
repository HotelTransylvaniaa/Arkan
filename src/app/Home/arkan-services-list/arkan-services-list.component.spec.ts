import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArkanServicesListComponent } from './arkan-services-list.component';

describe('ArkanServicesListComponent', () => {
  let component: ArkanServicesListComponent;
  let fixture: ComponentFixture<ArkanServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArkanServicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArkanServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

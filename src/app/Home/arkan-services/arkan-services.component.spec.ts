import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArkanServicesComponent } from './arkan-services.component';

describe('ArkanServicesComponent', () => {
  let component: ArkanServicesComponent;
  let fixture: ComponentFixture<ArkanServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArkanServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArkanServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

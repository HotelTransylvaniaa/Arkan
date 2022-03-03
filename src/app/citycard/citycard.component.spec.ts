import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityscardComponent } from './citycard.component';

describe('CityscardComponent', () => {
  let component: CityscardComponent;
  let fixture: ComponentFixture<CityscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

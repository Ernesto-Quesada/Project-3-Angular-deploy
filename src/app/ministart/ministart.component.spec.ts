import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistartComponent } from './ministart.component';

describe('MinistartComponent', () => {
  let component: MinistartComponent;
  let fixture: ComponentFixture<MinistartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

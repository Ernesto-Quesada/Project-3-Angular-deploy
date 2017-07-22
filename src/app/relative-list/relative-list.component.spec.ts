import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeListComponent } from './relative-list.component';

describe('RelativeListComponent', () => {
  let component: RelativeListComponent;
  let fixture: ComponentFixture<RelativeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

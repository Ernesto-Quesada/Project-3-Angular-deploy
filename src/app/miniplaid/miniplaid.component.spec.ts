import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniplaidComponent } from './miniplaid.component';

describe('MiniplaidComponent', () => {
  let component: MiniplaidComponent;
  let fixture: ComponentFixture<MiniplaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniplaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniplaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

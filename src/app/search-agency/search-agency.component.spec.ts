import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAgencyComponent } from './search-agency.component';

describe('SearchAgencyComponent', () => {
  let component: SearchAgencyComponent;
  let fixture: ComponentFixture<SearchAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

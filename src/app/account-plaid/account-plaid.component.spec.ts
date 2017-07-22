import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPlaidComponent } from './account-plaid.component';

describe('AccountPlaidComponent', () => {
  let component: AccountPlaidComponent;
  let fixture: ComponentFixture<AccountPlaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPlaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPlaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

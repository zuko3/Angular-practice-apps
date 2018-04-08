import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCmpComponent } from './users-cmp.component';

describe('UsersCmpComponent', () => {
  let component: UsersCmpComponent;
  let fixture: ComponentFixture<UsersCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

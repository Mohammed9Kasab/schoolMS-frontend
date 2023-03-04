import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPercentageComponent } from './user-percentage.component';

describe('UserPercentageComponent', () => {
  let component: UserPercentageComponent;
  let fixture: ComponentFixture<UserPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

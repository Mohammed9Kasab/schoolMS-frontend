import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVariablesComponent } from './new-variables.component';

describe('NewVariablesComponent', () => {
  let component: NewVariablesComponent;
  let fixture: ComponentFixture<NewVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

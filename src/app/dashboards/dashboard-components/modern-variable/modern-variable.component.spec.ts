import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernVariableComponent } from './modern-variable.component';

describe('ModernVariableComponent', () => {
  let component: ModernVariableComponent;
  let fixture: ComponentFixture<ModernVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

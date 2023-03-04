import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSatusComponent } from './campaign-satus.component';

describe('CampaignSatusComponent', () => {
  let component: CampaignSatusComponent;
  let fixture: ComponentFixture<CampaignSatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignSatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignSatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

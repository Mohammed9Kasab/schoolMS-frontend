import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCampaignComponent } from './user-campaign.component';

describe('UserCampaignComponent', () => {
  let component: UserCampaignComponent;
  let fixture: ComponentFixture<UserCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

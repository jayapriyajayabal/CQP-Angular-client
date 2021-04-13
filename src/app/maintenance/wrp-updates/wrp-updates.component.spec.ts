import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrpUpdatesComponent } from './wrp-updates.component';

describe('WrpUpdatesComponent', () => {
  let component: WrpUpdatesComponent;
  let fixture: ComponentFixture<WrpUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrpUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrpUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

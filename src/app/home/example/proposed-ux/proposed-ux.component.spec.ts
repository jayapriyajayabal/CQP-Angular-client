import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedUxComponent } from './proposed-ux.component';

describe('ProposedUxComponent', () => {
  let component: ProposedUxComponent;
  let fixture: ComponentFixture<ProposedUxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposedUxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

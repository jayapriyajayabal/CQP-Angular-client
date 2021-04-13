import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TPLItemDetailsComponent } from './tplitem-details.component';

describe('TPLItemDetailsComponent', () => {
  let component: TPLItemDetailsComponent;
  let fixture: ComponentFixture<TPLItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TPLItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TPLItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

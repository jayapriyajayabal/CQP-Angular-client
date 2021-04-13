import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TPLItemTableComponent } from './tplitem-table.component';

describe('TPLItemTableComponent', () => {
  let component: TPLItemTableComponent;
  let fixture: ComponentFixture<TPLItemTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TPLItemTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TPLItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

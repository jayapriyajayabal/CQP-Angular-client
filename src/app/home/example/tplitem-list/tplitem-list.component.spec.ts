import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TPLItemListComponent } from './tplitem-list.component';

describe('TPLItemListComponent', () => {
  let component: TPLItemListComponent;
  let fixture: ComponentFixture<TPLItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TPLItemListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TPLItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

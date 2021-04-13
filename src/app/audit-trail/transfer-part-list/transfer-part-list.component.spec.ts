import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPartListComponent } from './transfer-part-list.component';

describe('TransferPartListComponent', () => {
  let component: TransferPartListComponent;
  let fixture: ComponentFixture<TransferPartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferPartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPartsComponent } from './block-parts.component';

describe('BlockPartsComponent', () => {
  let component: BlockPartsComponent;
  let fixture: ComponentFixture<BlockPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

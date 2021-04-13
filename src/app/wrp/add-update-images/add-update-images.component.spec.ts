import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateImagesComponent } from './add-update-images.component';

describe('AddUpdateImagesComponent', () => {
  let component: AddUpdateImagesComponent;
  let fixture: ComponentFixture<AddUpdateImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

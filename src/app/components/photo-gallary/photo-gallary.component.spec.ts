import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGallaryComponent } from './photo-gallary.component';

describe('PhotoGallaryComponent', () => {
  let component: PhotoGallaryComponent;
  let fixture: ComponentFixture<PhotoGallaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoGallaryComponent]
    });
    fixture = TestBed.createComponent(PhotoGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

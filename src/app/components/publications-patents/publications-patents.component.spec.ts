import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsPatentsComponent } from './publications-patents.component';

describe('PublicationsPatentsComponent', () => {
  let component: PublicationsPatentsComponent;
  let fixture: ComponentFixture<PublicationsPatentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationsPatentsComponent]
    });
    fixture = TestBed.createComponent(PublicationsPatentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

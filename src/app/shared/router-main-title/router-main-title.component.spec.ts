import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMainTitleComponent } from './router-main-title.component';

describe('RouterMainTitleComponent', () => {
  let component: RouterMainTitleComponent;
  let fixture: ComponentFixture<RouterMainTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMainTitleComponent]
    });
    fixture = TestBed.createComponent(RouterMainTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

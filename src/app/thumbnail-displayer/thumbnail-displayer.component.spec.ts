import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailDisplayerComponent } from './thumbnail-displayer.component';

describe('ThumbnailDisplayerComponent', () => {
  let component: ThumbnailDisplayerComponent;
  let fixture: ComponentFixture<ThumbnailDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

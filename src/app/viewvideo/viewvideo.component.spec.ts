import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvideoComponent } from './viewvideo.component';

describe('ViewvideoComponent', () => {
  let component: ViewvideoComponent;
  let fixture: ComponentFixture<ViewvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewvideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

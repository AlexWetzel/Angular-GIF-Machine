import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifPanelComponent } from './gif-panel.component';

describe('GifPanelComponent', () => {
  let component: GifPanelComponent;
  let fixture: ComponentFixture<GifPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

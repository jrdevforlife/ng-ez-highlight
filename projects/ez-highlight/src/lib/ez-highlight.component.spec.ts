import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzHighlightComponent } from './ez-highlight.component';

describe('EzHighlightComponent', () => {
  let component: EzHighlightComponent;
  let fixture: ComponentFixture<EzHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

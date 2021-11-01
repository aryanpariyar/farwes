import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammerSectionComponent } from './gammer-section.component';

describe('GammerSectionComponent', () => {
  let component: GammerSectionComponent;
  let fixture: ComponentFixture<GammerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GammerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GammerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

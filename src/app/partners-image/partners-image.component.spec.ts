import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersImageComponent } from './partners-image.component';

describe('PartnersImageComponent', () => {
  let component: PartnersImageComponent;
  let fixture: ComponentFixture<PartnersImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

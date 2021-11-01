import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextItemsComponent } from './text-items.component';

describe('TextItemsComponent', () => {
  let component: TextItemsComponent;
  let fixture: ComponentFixture<TextItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

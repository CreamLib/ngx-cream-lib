import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEllipsisComponent } from './text-ellipsis.component';

describe('TextEllipsisComponent', () => {
  let component: TextEllipsisComponent;
  let fixture: ComponentFixture<TextEllipsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEllipsisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

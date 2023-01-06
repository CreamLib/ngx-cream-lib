import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCreamHelloComponent } from './ngx-cream-hello.component';

describe('NgxCreamHelloComponent', () => {
  let component: NgxCreamHelloComponent;
  let fixture: ComponentFixture<NgxCreamHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxCreamHelloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxCreamHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

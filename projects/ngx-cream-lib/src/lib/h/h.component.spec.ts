import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HComponent } from './h.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HComponent', () => {
  let component: HComponent;
  let fixture: ComponentFixture<HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply default title level', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('h2'));
    expect(de).toBeTruthy();
    const el: Element = de.nativeElement;
    expect(el.nodeName).toEqual('H2');
  });

  it('should apply title level 4', () => {
    component.titleLevel = '4';
    fixture.detectChanges();
    const de: DebugElement = fixture.debugElement.query(By.css('h4'));
    expect(de).toBeTruthy();
    const el: Element = de.nativeElement;
    expect(el.nodeName).toEqual('H4');
  });
});

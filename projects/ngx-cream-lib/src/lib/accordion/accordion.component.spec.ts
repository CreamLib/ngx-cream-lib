import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxCreamLibModule } from '../ngx-cream-lib.module';
import { AccordionComponent } from './accordion.component';

@Component({
  template: `
    <c3m-accordion><c3m-accordion-item></c3m-accordion-item></c3m-accordion>
  `,
})
class TestDefaultTitleLevelComponent {}
@Component({
  template: `
    <c3m-accordion titleLevel="4"><c3m-accordion-item></c3m-accordion-item></c3m-accordion>
  `,
})
class TestDefaultTitleLevel4Component {}

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent, TestDefaultTitleLevelComponent, TestDefaultTitleLevel4Component],
      imports: [NgxCreamLibModule],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create apply default title level', () => {
    const testFixture = TestBed.createComponent(TestDefaultTitleLevelComponent);
    testFixture.detectChanges();
    const de: DebugElement = testFixture.debugElement.query(By.css('h2'));
    expect(de).toBeTruthy();
    const el: Element = de.nativeElement;
    expect(el.nodeName).toEqual('H2');
  });

  it('should create apply title level 4', () => {
    const testFixture = TestBed.createComponent(TestDefaultTitleLevel4Component);
    testFixture.detectChanges();
    const de: DebugElement = testFixture.debugElement.query(By.css('h4'));
    expect(de).toBeTruthy();
    const el: Element = de.nativeElement;
    expect(el.nodeName).toEqual('H4');
  });
});

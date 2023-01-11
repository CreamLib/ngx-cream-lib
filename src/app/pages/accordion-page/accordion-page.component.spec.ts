import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { NgxCreamLibModule } from '../../../../projects/ngx-cream-lib/src/lib/ngx-cream-lib.module';
import { AccordionPageComponent } from './accordion-page.component';

describe('AccordionPageComponent', () => {
  let component: AccordionPageComponent;
  let fixture: ComponentFixture<AccordionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionPageComponent],
      imports: [NgxCreamLibModule],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

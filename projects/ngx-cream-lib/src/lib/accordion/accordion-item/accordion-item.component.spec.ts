import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxCreamLibModule } from '../../ngx-cream-lib.module';
import { AccordionItemComponent } from './accordion-item.component';

// class MockUserService {
//   isLoggedIn = true;
//   user = { name: 'Test User' };
// }

describe('AccordionItemComponent', () => {
  let component: AccordionItemComponent;
  let fixture: ComponentFixture<AccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionItemComponent],
      imports: [NgxCreamLibModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ids', () => {
    expect(component.accID).toBeTruthy();
    expect(component.accPanelID).toBeTruthy();
  });

  it('should generate id', () => {
    expect(component.randomID()).toBeTruthy();
  });

  it('isOpen should be false by default', () => {
    expect(component.isOpen).toBeFalse();
  });

  it('#toggleOpen should toggle isOpen', () => {
    expect(component.isOpen).toBeFalse();
    component.toggleOpen();
    expect(component.isOpen).toBeTrue();
  });

  it('#toggleOpen should toggle isOpen', () => {
    expect(component.isOpen).toBeFalse();
    component.toggleOpen();
    expect(component.isOpen).toBeTrue();
  });
});

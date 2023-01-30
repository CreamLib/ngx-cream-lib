import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignBasicsPageComponent } from './design-basics-page.component';

describe('DesignBasicsPageComponent', () => {
  let component: DesignBasicsPageComponent;
  let fixture: ComponentFixture<DesignBasicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignBasicsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignBasicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

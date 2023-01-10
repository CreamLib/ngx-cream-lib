import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainNavigationComponent } from './main-navigation.component';

describe('MainNavigationComponent', () => {
  let component: MainNavigationComponent;
  let fixture: ComponentFixture<MainNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNavigationComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

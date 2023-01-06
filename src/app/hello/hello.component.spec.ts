import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxCreamLibModule } from 'projects/ngx-cream-lib/src/lib/ngx-cream-lib.module';
import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloComponent],
      imports: [NgxCreamLibModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

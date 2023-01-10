import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AccordionService } from './accordion.service';

describe('AccordionService', () => {
  let service: AccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud receive id when call open', fakeAsync(() => {
    let idRecieved = '';
    service.change$.subscribe(idPanel => {
      idRecieved = idPanel;
    });
    service.open('panel1234556');
    tick();
    expect(idRecieved).toBe('panel1234556');
  }));
});

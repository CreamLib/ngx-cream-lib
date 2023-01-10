import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  private _change = new Subject<string>();
  change$ = this._change.asObservable();

  open(idPanel: string) {
    this._change.next(idPanel);
  }
}

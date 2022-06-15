import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollHandler$ = new Subject<void>();
  constructor() { }
  gethandler(): Subject<void>{
    return this.scrollHandler$;
  }
  
}

import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable()
export class MyStoreService {
  myObservable$ = of('hello').pipe(delay(500));

  data = Math.random();

  constructor() {}
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class MyStoreService {
  
  myObservable$ = of("hello");

  constructor() {}
}

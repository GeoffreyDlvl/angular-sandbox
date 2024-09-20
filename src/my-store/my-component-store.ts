import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore, OnStateInit } from '@ngrx/component-store';
import { delay, of, tap } from 'rxjs';

@Injectable()
export class MyComponentStore
  extends ComponentStore<{ data: number }>
  implements OnStateInit, OnDestroy
{
  myObservable$ = of(true).pipe(delay(300));

  data = this.selectSignal((state) => state.data);

  constructor() {
    super({ data: Math.random() });
  }

  ngrxOnStateInit() {
    console.log('state init');
    // this.updateData();
  }

  updateData = this.effect(($) =>
    $.pipe(
      delay(1000),
      tap(() => this.patchState({ data: Math.random() }))
    )
  );

  override ngOnDestroy(): void {
    console.log('state destroy');
    super.ngOnDestroy();
  }
}

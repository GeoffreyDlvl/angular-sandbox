import { Component, OnDestroy, inject } from '@angular/core';
import { MyComponentStore } from 'src/my-store/my-component-store';
import { MyStoreService } from 'src/my-store/my-store.service';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.css',
})
export class ComponentBComponent implements OnDestroy {
  myStore = inject(MyComponentStore);

  ngOnDestroy(): void {
    console.log('destroy component b');
  }
}

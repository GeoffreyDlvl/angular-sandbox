import { Component, OnDestroy, inject } from '@angular/core';
import { ComponentBComponent } from '../component-b/component-b.component';
import { MyStoreService } from 'src/my-store/my-store.service';
import { CommonModule } from '@angular/common';
import { MyComponentStore } from 'src/my-store/my-component-store';
import { provideComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [ComponentBComponent, CommonModule],
  providers: [provideComponentStore(MyComponentStore)],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.css',
})
export class ComponentAComponent implements OnDestroy {
  myStore = inject(MyComponentStore);

  ngOnDestroy(): void {
    console.log('destroy component a');
  }
}

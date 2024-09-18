import { Component, inject } from '@angular/core';
import { ComponentBComponent } from '../component-b/component-b.component';
import { MyStoreService } from 'src/my-store/my-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [ComponentBComponent, CommonModule],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.css',
})
export class ComponentAComponent {
  myStore = inject(MyStoreService);
}

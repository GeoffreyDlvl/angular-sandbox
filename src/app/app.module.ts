import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentAComponent } from 'src/components/component-a/component-a.component';
import { MyStoreService } from 'src/my-store/my-store.service';
import { MyComponentStore } from 'src/my-store/my-component-store';
import { provideComponentStore } from '@ngrx/component-store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentAComponent],
  // providers: [provideComponentStore(MyComponentStore)],
  bootstrap: [AppComponent],
})
export class AppModule {}

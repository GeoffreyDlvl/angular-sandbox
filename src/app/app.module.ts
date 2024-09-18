import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentAComponent } from 'src/components/component-a/component-a.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentAComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

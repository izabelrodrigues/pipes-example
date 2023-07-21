import { TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { RemovePrefixPipe } from './pipes/remove-prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    RemovePrefixPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [OrderByPipe, TitleCasePipe, RemovePrefixPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

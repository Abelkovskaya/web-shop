import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClickOutsideDirective } from './cart-page/clickOutside.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    AppComponent
  ],
  imports: [
    HttpClientModule, BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
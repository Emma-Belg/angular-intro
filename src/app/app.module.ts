import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  //this is for the directives, components and pipes we write ourselves
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  //this is for stuff(directives, components and pipes) from angular itself or external sources
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

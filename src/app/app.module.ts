import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  //this is for the directives, components and pipes we write ourselves
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  //this is for stuff(directives, components and pipes) from angular itself or external sources
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  //the app module bootstraps the application with the AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }

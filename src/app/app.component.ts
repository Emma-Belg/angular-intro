import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:
  //Note the syntax for the router link:
  //we assign the router link directive to an array defned within quotes
  //the first element of the array is a string, so therefore also in quotes
  `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
      <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
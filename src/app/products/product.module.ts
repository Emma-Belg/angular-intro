import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    //b/c this is not in the root module you must call forChild method not forRoot
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ])
  ]
})
export class ProductModule { }

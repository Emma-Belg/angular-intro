import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
//import { threadId } from 'worker_threads';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage:boolean = false;
    errorMessage: string;
    _listFilter: string;
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts= this.listFilter ? 
                        this.performFilter(this.listFilter)
                        : this.products;
    }

    filteredProducts: IProduct[];

    //note: we cannot simply filter the original products array
    //if we did this would lose the orignial data and
    //would then have to get it again from the data source
    products: IProduct[] = [];

    constructor(private productService: ProductService){
    }

    //note that TS does not require the word function for functions
    toggleImage():void{
        //using the not on the right hand side means that this will always switch between the two - toggling back and forth
        this.showImage = !this.showImage;
    }

    //this lifecycle hook is a good place to retrieve data
    ngOnInit():void{
        //b/c we changed the Product service to return an Observable, we cannot assign the result to our prduct property directly
        //this.products = this.productService.getProducts();
        //we changed the above line to this
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    }

    performFilter (filterBy: string): IProduct[] {
        //we need to convert it to lowercase as it is case sesnsitive and this could influence the list.
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        //indexOf is used to see if the input text is found in the product name
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: ' + message;
    }

}
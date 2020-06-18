import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

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
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
    ];

    constructor(private productService: ProductService){
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    //note that TS does not require the word function for functions
    toggleImage():void{
        //using the not on the right hand side means that this will always switch between the two - toggling back and forth
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        console.log('in OnInit');
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
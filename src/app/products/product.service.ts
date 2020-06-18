import { Injectable } from "@angular/core";
import { IProduct } from './product';

@Injectable({
    //prividedIn feature is new from Angular6
    //before that it was written into a module like this
    //providers: [ComponentName]  <- this is no longer recommened but still works
    providedIn: 'root'
})
export class ProductService {
    //We have no properties defined in this class because we aren't using it to share data
    //instead we are usng it to encapsulate the data access features
    //we take the responsibility for managing the product list data away from the component
    //that makes it easier to modify or reuse this logic

    getProducts(): IProduct[] {
        return [
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
              }
        ]
    }
}
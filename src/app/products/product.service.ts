import { Injectable } from "@angular/core";
import { IProduct } from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    //prividedIn feature is new from Angular6
    //before that it was written into a module like this
    //providers: [ComponentName]  <- this is no longer recommened but still works
    providedIn: 'root'
})
export class ProductService {
    //When we have no properties defined in this class, it is because we aren't using it to share data
    //instead we are usng it to encapsulate the data access features
    //we take the responsibility for managing the product list data away from the component
    //that makes it easier to modify or reuse this logic

    //the location of this json file needs to be given in the angular.json
    //it is in the "assests" array and allows the ng CLI to find it when it serves the app
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log ('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}
import {Component, OnChanges, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    //please note that ONLY the rating is decorated with @Input here, although several things COULD be decorated if needed
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void {
        //the 75 is based on the px size of the stars (see the html)
        this.starWidth = this.rating * 75 / 5;
    }

    onClick():void {
        //Note: this emit method can be found inside the EventEmitter which has been imported from angular core
        //you can see (above) that ratingClicked is an instance of the EventEmitter object
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}
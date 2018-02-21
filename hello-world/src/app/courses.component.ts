/*
    Pipes:
        - Formatting data
            Uppercase
            LowerCase
            Decimal
            Currency
            Percent
            <custom>

        - Preceeded with a | character

             {{ course.rating | number }}
             
             + Can have multiple and it flows in order
            
             {{ course.title | uppercase  | lowercase }}
            
        - Interesting Note:
            + The Pipe for 'decimal' is 'number' which formmats comma's / decimals as appropriate
            + Formatting further with decimal: Number = 4.9745

                number:'<number of integers range>.<decimal range>'

                // Will do 1 integer and minimum of 2 decimals to maximum of 2 decimals
                number:'1.2-2' -- 4.97

                // Rounding
                number:'1.1-1' -- 5.0

                // Leading 0
                number:'2.1-1' -- 05.0

            + Currency has different bindings as well: Number = 190.95

                // Default
                currency -- $190.95

                // AUD
                currency:'AUD':false -- AUD190.95

                // AUD Symbol
                currency:'AUD' -- A$190.95

                // Can even range it like decimal did!
                currency:'AUD':<true/false>:'3.2-2' -- No changes

            + Date: new Date(2016, 3, 1) (Months are 0-base index)

                // Default
                date:'shortDate' -- 4/1/16

                // More DatePipe: https://angular.io/api/common/DatePipe
        
*/
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        {{ course.title | uppercase  | lowercase }} <br />
        {{ course.students | number }} <br />
        {{ course.rating | number:'2.1-1' }} <br />
        {{ course.price | currency:'AUD':true:'4.2-2' }} <br />
        {{ course.releaseDate | date:'shortDate' }} <br />
    `
})
export class CoursesComponent {
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
}
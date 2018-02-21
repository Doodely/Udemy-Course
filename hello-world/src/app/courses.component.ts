/*
    Event Filtering:
        - Handling the keyup event...
            + Example of binding to the "ENTER" key being pressed

            // Vanilla JS
            if($event.keyCode === 13) console.log("Enter was pressed");

            // Angular
            <input (keyup.enter)="onKeyUp()"/>
            - No need to pass $event to check for a keyCode or anything!
            
*/
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <input (keyup.enter)="onKeyUp()"/>
    `
})
export class CoursesComponent {
    onKeyUp() {
        console.log("Enter was pressed");
    }
}
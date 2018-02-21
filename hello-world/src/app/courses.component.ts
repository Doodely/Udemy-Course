/*
    Template Variables:
        - Instead of passing the $event object around, Angular has a way to reference
        the input field through a variable

        Example being an email capture:
            <input #email

            - The # represents a template variable reference
            - You can then call .value or other properties of JS from the referenced variable 
            like you would with typical variables!

            
*/
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <input #email (keyup.enter)="onKeyUp(email.value)"/>
    `
})
export class CoursesComponent {
    onKeyUp(email) {
        console.log(email);
    }
}
/*
    Two-Way Binding:
        - It kind of sucks to pass the email object around, and could definitely be 
        better simplified and more practical:
            + email; field is used to encapsulate the data
            + onKeyUp method represents the logic behind the view
        
        - If we initialize the email field and then modify it on the front-end, 
        the console log will only show the initial value and not the updated. This 
        is a one-way binding.

            <input [value]="email" (keyup.enter)="onKeyUp()"/>
            
            export class CoursesComponent { email = "me@example.com"; }

            + Remember: Property-binding goes from component to view; one-way.
        
        - Making it two-way:

            // Bad way -- Setting value and then executing the method
            <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>

            // Good Way -- Syntax for two-way binding            
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
            + Instead of property-binding []; use [(ngModel)] (Banana in a box)
            + ngModel belongs to the Angular Core for Forms which needs to be imported:

                app.module.ts
                
                    import { FormsModule } from '@angular/forms';

                    imports: [ FormsModule ]
        
*/
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <!--<input [value]="email" (keyup.enter)="onKeyUp()"/>-->
        <!--<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>-->
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

    `
})
export class CoursesComponent {
    email = "me@example.com";

    onKeyUp() {
        console.log(this.email);
    }
}
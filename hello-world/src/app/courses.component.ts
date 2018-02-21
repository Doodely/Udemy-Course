/*
    Event Binding:
        (<event>)="method()" or  (<event>)="script"
    
    Accessing event calls thhrough $event
        - $event in the case of the button will be a standard DOM event
        - Is binded so you can acceess the properties called from the event:
            $event.clientX or $event.defaultPrevented, etc
        
    Event Bubbling:
        - Added a div with a console.log message. Since DOM events bubble up
        the div's message will come 2nd, after the events in the click are 
        finished.
        - Preventing through vanilla JS: $event.stopPropagation()
*/
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
    `
})
export class CoursesComponent {
    onDivClicked() {
        console.log("Div was clicked");
    }
    onSave($event) {
        $event.stopPropagation();

        console.log("Button was clicked", $event);
    }
}
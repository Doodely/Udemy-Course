import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

/*
    Example of a class-binding (property bind)
        - Can help with toggling classes that aren't always required

    Example of style-binding (attribute binding)
        - List of all applicable: https://www.w3schools.com/jsref/dom_obj_style.asp
*/
@Component({
    selector: 'courses',
    template: `
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    `
})
export class CoursesComponent {
    isActive = true;
}
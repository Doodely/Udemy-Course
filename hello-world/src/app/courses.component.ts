import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

/*
    Example of a class-binding (property bind)
        - Can help with toggling classes that aren't always required
*/
@Component({
    selector: 'courses',
    template: `
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent {
    isActive = false;
}
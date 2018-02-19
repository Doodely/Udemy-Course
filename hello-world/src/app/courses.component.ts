/*
    When adding a dependancy, we need to make sure we update app.module under the 'providers' section!

    CLI for creating a service:

        // Notice no .services affix!
        ng g s email
*/
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = 'List of courses';
    courses;

    // Creates instance of CoursesService and prevents changes affecting multiple implementations!
    // Adding a dependancy to the constructor for the service; decouples tight coupling of using "new"
    constructor(service: CoursesService) {
       this.courses = service.getCourses();
    }
}
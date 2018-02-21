/*
    When adding a dependancy, we need to make sure we update app.module under the 'providers' section!

    CLI for creating a service:

        // Notice no .services affix!
        ng g s email
*/
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

/*
     String Interpolation {{ }} is best used where dynamic text might appear:
        - Divs, paragraphs, titles, headings, etc

    Property Binding []="" might be better preferred for content that has attributes naturally
        - Only works one-way; from component to DOM.
*/
@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <img [src]="imageUrl" />
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = 'List of courses';
    imageUrl = "http://lorempixel.com/400/200";
    courses;

    // Creates instance of CoursesService and prevents changes affecting multiple implementations!
    // Adding a dependancy to the constructor for the service; decouples tight coupling of using "new"
    constructor(service: CoursesService) {
       this.courses = service.getCourses();
    }
}
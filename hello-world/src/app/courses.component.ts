/*
    ` character allows strings to be broken up into multiple-lines.
    Best utilized with templates.

    Directives can utilize special functionality for HTML elements:

        // The * is used for directives that modify the DOM as standard
        *ngFor
        
        // Iterates the variable "course" over courses field (courses[])
        *ngFor="let course of courses"     
*/
import { Component } from '@angular/core'

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
    courses = ["course1", "course2", "course3"];
}
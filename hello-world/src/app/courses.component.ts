/*
    ** PascalNaming convention.

    To make this file an actual component, we have to do a few things...
        Import the Component declarator
        Use the @Component() declarator above the class
            - Set the selector targeting property
            - Set the html template to generate
        Import it in the app.module (or preferred location) under the declarations area
            - Typing the component and hitting enter will automagically place the import logic
            under the appropriote area, saving typing time!

    *************************************

    This all seems tedious... CLI can save us a lot of time and do all of this pretty quickly for us!

        ng g c course // g = Generator; c = Component
*/
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: '<h2>{{ getTitle() }}</h2>' // Passing data; data-binding. Can pass functions / variables, etc
})
export class CoursesComponent {
    title = 'List of courses';

    getTitle() {
        return "Title: " + this.title;
    }
}
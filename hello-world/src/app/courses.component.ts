/*
    Custom Pipes:
        - App > New File 'summary.pipe.ts'
        
*/
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:10 }}
    `
})
export class CoursesComponent {
    text = `
    Lorem Ipsum is simply dummy text of the printing and typeset like this and this and this like this and this and this like this and this and this like this and this and this like this and this and this like this and this and this like this and this and this like this and this and this 
    `
}
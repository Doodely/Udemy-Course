/*
    implements - Implements an external class

        export class SummaryPipe implements PipeTransform {}
        
        + Syntax error for poor implementation of the interface PipeTransform: https://angular.io/api/core/PipeTransform
        + We need to add the "transform(<T> any, <T>? any) method"
            *** "?" represents an optional parameter
        + @Pipe component call with keyword to call the custome Pipe

            @Pipe({
                name: 'summary'
            })
    
    - Adding some validation:
        + We change value: any to value: string to access Intellisense properties for a string
        + Substring from 0 - 50 characters and for readability, add elipses
        + Angular still won't load the page?... Oh! We need to make sure the app.module knows about our Pipes!

            app.module.ts
                @NgModule({
                    declarations: []
                })
                
        + Let's say we want to change the substring range through an argument? summary:10
        + Let's rename 'args' to something more readable, 'limit?: number
                *** Can add more and more optional parameters as needed :)
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if(!value) {
            return null;
        }

        let actualLimit = (limit) ? limit : 50;
        return value.substr(0, limit) + '...';
    }
}
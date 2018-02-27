/*
  Shadow DOM:
    - Specification that allows DOM tree encapsulation
    - In component you can utilize 
      + Emulated: utilizes shadowDOM
      + Native shadowDom: non-emulated and very dependant on browser
      + None: can leak styles
*/
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .fa-star.blue { color: green; }      
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  onClick() {
    // Toggle
    this.isFavorite = !this.isFavorite;

    // Can also pass an object
    this.click.emit({ newValue: this.isFavorite })
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

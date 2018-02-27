/*
  Three ways to utilize styles:
    - styleUrls: ['']
    - styles: [] using ` ` to write styles inline (smaller styles)
      + Angular will choose the one that comes last.
    - inline in HTML template
*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .fa-star.blue { color: green; }      
    `
  ]
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

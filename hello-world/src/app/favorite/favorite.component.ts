import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',

  /* 
    Template Property (Can only choose templateUrl or template; NOT both)
    Ideally you use template for less than 5-10 lines worth of code; else 
    reference a templateUrl

    template: '',
  */
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

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

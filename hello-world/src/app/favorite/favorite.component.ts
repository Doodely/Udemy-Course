import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  
  // Output alias; like Input
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

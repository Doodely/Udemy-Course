import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // Toggle
    this.isFavorite = !this.isFavorite;

    // Can optionally pass a value; available  to all subscribers of the event
    //this.change.emit(this.isFavorite);

    // Can also pass an object
    this.change.emit({ newValue: this.isFavorite })
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

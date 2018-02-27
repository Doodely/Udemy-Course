import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;

  /*
    - Imported the Output class
    - Declared the output for the type of event and set it to 
    the non-primative type "EventEmitter"
      + Add to imports from Core
      + .emit() passes along the information that the event fired.
  */
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // Toggle
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}

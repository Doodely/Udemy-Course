//import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  //inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  /*
    Two ways to mark this as an input property:
      - Add "Input" to the import and then annotate the field @Input()
          + This will expose the field
      - Declare the field as an input field in component metadata
        + inputs: ['']
          ++ This will control all fields that could be declared as inputs
          ++ Limited by requiring the field to be present (so renaming or other refactoring)
          could compromise code with false data or weird effects.
          ++ Might be better to use the first approach.
  */
  //isFavorite: boolean;
  @Input() isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // Toggle
    this.isFavorite = !this.isFavorite;
  }
}

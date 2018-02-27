import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  // onFavoriteChanged(isFavorite) {
  //     console.log("Favorite changed: ", isFavorite);
  // }

  /*
    Instead of inline type declaring this object as a boolean (looks messy):

      eventArgs: { newValue: boolean }

    We can organize and pass interfaces or better defined data.

      eventArgs: FavoriteChangedEventArgs

      - This also gives us Intellisense
      - Exported the Interface to favorite.component
  */
  // Passing an object
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
}
}

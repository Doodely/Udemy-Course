import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    // Check for value
    if(!value) { 
      return null;
    }
    
    // Split the words into individuals
    let words = value.split(' ');

    // Loop through the words
    for(var i = 0; i < words.length; i++) {
      // Easier readability
      let word = words[i];
      
      if(i > 0 && this.isPreposition(word)){
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }      
    }

    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes( word.toLowerCase() );
  }

  private toTitleCase(word: string) : string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}

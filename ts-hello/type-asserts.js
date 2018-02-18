var message = 'abc';
var endsWithC = message.endsWith('c'); // Types get methods after placing "."; think of C#
// TypeScript can get confused with variabl types
var message2; // Type is any when a value isn't set...
message2 = 'abc';
var endsWithC2 = message2.endsWith('c'); // No Intellisense
// We need to tell TypeScript this is a string!
// Both ways are the exact same, so choose the best
var message3;
message3 = 'abc';
var endsWithC3 = message3.endsWith('c'); // Like Casting!
var endsWithC3Alt = message.endsWith('c'); // Alternative!

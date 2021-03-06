let message = 'abc';
let endsWithC = message.endsWith('c'); // Types get methods after placing "."; think of C#

// TypeScript can get confused with variabl types
let message2; // Type is any when a value isn't set...
message2 = 'abc';
let endsWithC2 = message2.endsWith('c'); // No Intellisense

// We need to tell TypeScript this is a string!
// Both ways are the exact same, so choose the best
let message3;
message3 = 'abc';
let endsWithC3 = (<string>message3).endsWith('c'); // Like Casting!
let endsWithC3Alt = (message as string).endsWith('c'); // Alternative!
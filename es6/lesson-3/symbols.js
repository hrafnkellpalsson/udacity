// This code should be run in the browser rather than in node because for some
// reason node has problems with logging out the object itself.

const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);
let symbolsOnObj = Object.getOwnPropertySymbols(bowl);
console.log(symbolsOnObj);

// Won't is undefined because the Symbol('apple') argument here is not the same
// as the Symbol('apple') in the object.
console.log(bowl[Symbol('apple')]);
// To reinforce my previous point this is false
console.log(Symbol('whee') === Symbol('whee'));

// But this works
console.log(bowl[symbolsOnObj[0]]);

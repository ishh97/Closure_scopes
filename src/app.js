// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop

// Progression 2: add 3 variables: title, currIndex, check

// Progression 3: create a function "searchForElement"

// Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
// to return the desired output.

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;
const NEG_INF = -1000000;

function createPop(list, items) {
  let currentIndex = NEG_INF;
  let flag = true;

  const elementSearch = (array, givenItem) => {
    array.forEach((element, index) => {
      if (element === givenItem) {
        currentIndex = index;
        flag = false;
      }
    });
  };

  return () => {
    elementSearch(list, items);
    const i = currentIndex;
    const present = flag;

    if (!present) {
      return `The item is present and is at index ${i}`;
    } else {
      return `The item is not present and is at index ${i}`;
    }
  };
}
createPop(arrayOfNumbers, itemToSearch);

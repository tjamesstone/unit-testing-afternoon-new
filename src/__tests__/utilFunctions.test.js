//FUNCTIONS
import {findDuplicateStrings, } from '../utils/functions'
const removeDuplicateStrings = arr => {
  let newArr = arr.filter((v,i) => arr.indexOf(v) === i)
  return(newArr)
}
const removeEveryThirdItem = arr =>{
  let newArr = arr.filter(function(d, i){ return (i+1)%3 !== 0; })
  return newArr
}
const replaceJohnWithAndrew = arr => {
  let newArr = arr.map(el => {
    if(el === 'John'){
      return `Andrew`
    } else {
      return el
    }
  })
  return newArr[0]
}
const removeEvens = arr => {
  let newArr = arr.filter(function(el, i, arr){
    return (i % 2 === 0)
  })
  return newArr
}

//DATA
export const peopleArr = ['John', 'Mary', 'Jill', 'John']
const numberArr = [1,2,3,4,5,6,7,8,9,10,11,12]

//TESTS
it('findDuplicateStrings should return all the duplicates', () => {
  expect(findDuplicateStrings(peopleArr)).toHaveLength(1)
})
it('removeDuplicateStrings should remove all the duplicates', () => {
  expect(removeDuplicateStrings(peopleArr)).toHaveLength(3)
})
it('removeEveryThirdItem should remove every third item in the array', () => {
  expect(removeEveryThirdItem(peopleArr)).toHaveLength(3)
})
it('replaceJohnWithAndrew should remove replaces all Johns with Andrew', () => {
  expect(replaceJohnWithAndrew(peopleArr)).toBe('Andrew')
})
it('removeEvens should only return muliples of three', () => {
  expect(removeEvens(numberArr)).toHaveLength(6)
})








//IGNORE THIS, THIS IS FROM THE AFTERNOON PROJECT ASSOCIATED WITH IT



// it('shortenText should not alter a string with less than 100 characters', () => {
//     expect(shortenText(shortText)).toHaveLength(29);
//   });
  

// it('shortenText should cut off extra characters after 100 and add three periods', () => {
//     const shortened = shortenText(longText);
//     expect(shortened).not.toHaveLength(longText.length);
//     expect(shortened.slice(-3)).toBe('...');
//   });

// it('wordCount should correctly count the number of words in a sentence', () => {
//     expect(wordCount(posts)).toBe(233);
//   });

// it('attachUserName should correctly attach a users full name to a post', () => {
//     const newPosts = attachUserName(users, posts);
//     expect(newPosts[0]).toHaveProperty('displayName');
// });

// it('attacheUserName should remove post with no matching user', () => {
//     const newPosts = attachUserName(users, posts);
//     const deletedPost = posts[5];
//     expect(newPosts).not.toContainEqual(deletedPost)
// })
export const shortenText = text => {
  if (text.trim().length >= 100 && text.length !== 100) {
    return `${text.substr(0, 100).trim()}...`;
  }
  return text;
};

export const findDuplicateStrings = arr => {
  let newArr = arr.filter((item, index) => arr.indexOf(item) !== index)
  return newArr
}

export const removeDuplicateStrings = arr => {
  let newArr = arr.filter((v,i) => arr.indexOf(v) === i)
  return(newArr)
}
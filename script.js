let generatedText = [];
const generateItemA = ["Red", "Blue", "Yerrow", "Pink", "Darkblue", "Orange", "White", "Black", "Brown", "Gray"];
const generateItemB = ["happy", "angry", "dizzy", "funky", "lazy", "calm", "fluffy", "funny", "grumpy"];
const generateItemC = ["cat", "Robot", "rabbit", "giraffe", "elephant", "bear", "dragon", "butterfly", "fish", "shark", "bird", "squirrel", "dwarf", "monkey"];
const generateArr = [generateItemA, generateItemB, generateItemC];

const generator = arr => {
  let i = 0;
  for(let i in arr){
    arr[i] = arr[i][Math.floor(Math.random() * (arr[i].length-1))];
    generatedText.push(arr[i]);
  }
 return `new nickname generated: ${generatedText[0]}-${generatedText[1]}-${generatedText[2]}`;
};

console.log(generator(generateArr));
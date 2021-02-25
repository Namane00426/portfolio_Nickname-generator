let generatedText = [];
const generateItemA = [red, blue, yerrow, pink, darkblue, orange, white, black, brown, gray];
const generateItemB = [happy, angry, dizzy, funky, lazy, calmly, fluffy, funny, grumpy, ];
const generateItemB = [cat, dog, rabbit, giraff, elephant, bear, snake, mouse, fish, shark, bird, squirrel, mole, monkey];

const randomPicking = arr => {
 arr.filter(elm => arr[Math.floor(Math.random() * arr.length-1)] )
 generatedText.push(arr(0));
 return generatedText;
}

randomPicking(generateItemA);
randomPicking(generateItemB);
randomPicking(generateItemC);

console.log(generatedText);
// Long long word

// function longLong(word){
//     let vowels = ['a','e','i','o','u']
//     let newWord = ''
//     let prevChar = ''
//     for (let char of word){
//         if (char.toLowerCase() === prevChar && vowels.includes(char)){
//             newWord = newWord + char.repeat(4)
//         } else {
//             newWord = newWord + char
//         }
//         prevChar = char.toLowerCase()
//     }
//     return newWord
// }
// console.log(longLong('Cheese'))

// leetspeak

// var str = "Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string."
// function leetspeak(text) {
//     let leet = {
//         a: 4,
//         e: 3,
//         g: 6,
//         i: 1,
//         o: 0,
//         s: 5,
//         t: 7};
//         let newText = "";
//     for (let char of text) {
//         if (Object.keys(leet).includes(char.toLowerCase())) {
//             char = leet[char].toString();
//         }
//         newText = newText.concat(char);
//     }
//     return newText
// }
// console.log(leetspeak(str));

// print box

// function printBox(x,y) {
//     console.log(` ${"-".repeat(x)} `);
//     var i = 1;
//     while (i <= (y-2)) {
//         console.log(`|${" ".repeat(x)}|`);
//         i++;
//     }
//     console.log(` ${"-".repeat(x)} `);
// }
// printBox(20,10);

// Just the positives

// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

// function posNums(numArray)
// {
//     var tempList = [];
//     for(var x = 0; x<numArray.length;x++)
//     {
//         if(numArray[x] > 0)
//         {
//             tempList.push(numArray[x]);
//         }
//     }
//     return tempList;
// }
// var example = [-5,-3,-2,0,1,2,3,5];
// console.log(posNums(example));

// cipher //
function decipher(string, offset)
{
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z' ];
    let lengthString = string.length;
    let alphabetLength = alphabet.length;
    let cipher = "";
    for(let x = 0; x < lengthString; x++)
    {
        let temp = myString[x];
        if(temp == ' ')
        {
            cipher = cipher + ' ';
        }
        for(let y = 0; y < alphabetLength; y++)
        {
            if(temp == alphabet[y])
            {
                // handles index overflow
                if(y + offset > 25)
                {
                    newIndex = ((y + offset) % 25) - 1
                }
                else
                {
                    newIndex = y + offset;
                }
                cipher = cipher + alphabet[newIndex];
                // saves run-time
                break;
            }
        }
    }
    return cipher;
}
let offset = 13;
let myString = "lbh zhfg hayrnea jung lbh unir yrnearq";
console.log(decipher(myString, offset))







Message hybrid-immersive-11-2020















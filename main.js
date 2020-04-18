const Array = require('./arrays.js');

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}

main();

//URLify a string
function urlify() {
    const url = 'www.thinkful.com /tauh ida par veen';
    const newStr = url.replace(' ', '%20');
    console.log(newStr);
}
urlify();

//Filter an array
function lessThanFive() {
    const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arrayOfTen.length; i++) {
        if (arrayOfTen[i] < 5) {
            arrayOfTen.splice(i, 1);
        }
    }
    console.log(arrayOfTen);
}
lessThanFive();

//Max sum in the array
function maxSum() {
    const array = [4, 6, -3, 5, -2, 1];
    
}

//Merge arrays
function arrayMerge() {
    const arr1 = [1, 3, 6, 8, 11]
    const arr2 = [2, 3, 5, 8, 9, 10]
    const newArr = arr1.concat(arr2);
    console.log(newArr);
}
arrayMerge();

//Remove characters
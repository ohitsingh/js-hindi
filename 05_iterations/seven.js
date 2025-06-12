const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum =muNums.map((num) => num+10)
// console.log(newNum); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const newNum =muNums.map((num) => {return num+10})
// console.log(newNum); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


const newNum = myNums
                .map((num) => num *10)
                .map((num) => num + 10);


console.log(newNum); // [20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
// const newNum = myNums.map((num) => num * 10).map((num) => num + 10);
// console.log(newNum); // [20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
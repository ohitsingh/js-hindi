// const coading = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// const myIteam = coading.forEach((item)=>{
//     console.log(item);
// })

// console.log(myIteam); // undefined, because forEach does not return anything

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newNum = myNum.filter((num)=> num >4)
// // console.log(newNum); // [5, 6, 7, 8, 9, 


// const newNum = myNum.filter((num)=>{
//     num>4
// })

// console.log(newNum); // [5, 6, 7, 8, 9, 10]
// undefined, because filter does not return anything
// filter returns a new array with elements that pass the test implemented by the provided function
// filter does not modify the original array
// filter is used to filter out elements from an array based on a condition
// filter is a higher-order function
// filter is a method of the Array prototype
// filter is used to create a new array with elements that pass the test implemented by the provided function
// filter is used to remove elements from an array that do not pass the test implemented by the provided function
// filter is used to create a new array with elements that pass the test implemented by the provided function
// filter is used to create a new array with elements that pass the test implemented by the provided function




// const newNums = []
// myNum.forEach((num) =>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums); // [5, 6, 7, 8, 9, 10]


const books = [
    {title:'Book One',genre:'friction',publish:2020,edition:2004},
    {title:'Book Two',genre:'non-friction',publish:2021,edition:2005},
    {title:'Book Three',genre:'friction',publish:2022,edition:2006},
    {title:'Book Four',genre:'History',publish:2023,edition:2007},
    {title:'Book Five',genre:'friction',publish:2024,edition:2008},
    {title:'Book Six',genre:'friction',publish:2025,edition:2009},
    {title:'Book Seven',genre:'friction',publish:2026,edition:2010},
    {title:'Book Eight',genre:'friction',publish:2027,edition:2011}
];


const userBooks = books.filter((bk) => bk.genre === 'friction' );

const bookPublish = books.filter((pub) => pub.publish >2025  ||pub.genre === 'friction' );
console.log(bookPublish); // Array of books published after 2025
// console.log(userBooks); // Array of books with genre 'friction'



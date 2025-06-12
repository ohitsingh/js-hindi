const coading = ["js", "py", "rb", "java", "cpp"];

// coading.forEach( function(item){
//     console.log(item);
// })



// coading.forEach((item)=>{
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }

// coading.forEach(printMe);

// coading.forEach((item,index,arr) =>{
//     console.log(item, index, arr);
// })



const myCoading = [
    {
        laungageName: "JavaScript",
        lafileName: "js"
    },
    {
        laungageName: "Java",
        lafileName: "java"
    },
    {
        laungageName: "Python",
        lafileName: "py"
    }
]



myCoading.forEach((item)=>{
    console.log(item.lafileName)
})
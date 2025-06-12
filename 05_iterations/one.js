// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }


// for(let i=0; i<10; i++){
//     const element = i;

//     if(ellment == 5){
//         // console.log("5 is the best number");

//     }

//     // console.log(element);
// }




// for (let i = 0; i <= 10; i++) {
//     console.log(`outer look ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop ${j}and inner loop ${i}`);
//     }
// }


// let MyArray = ["apple", "banana", "orange", "grape", "kiwi"];
// for (let i = 0; i < MyArray.length; i++) {
//     const element = MyArray[i];
//     console.log(element);
// }


// break and continue

for (let index = 1; index <=20; index++){

    if(index == 5){
        console.log("5 is Detected");
        break
        // continue; // Skip the rest of the loop when index is 5
    }
    console.log(`Value of i is ${index}`);   
}
// Immediately Invoked Function Expressin(IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();


( () =>{
    console.log(`Aur Code`)
})();


( (name) =>{
    console.log(`Aur Code ${ name}`)
})("Mohit")

// chai()
// Immidiately Invoked Function Expressions ( IIFE )

(function chai(){
    console.log(`DB CONNECTED`); // this is a syntax of iife
    
})(); ///this is named iife

// fuction execute immidiatly 

// ✅ Avoid polluting the global scope
// ✅ Create private variables
// ✅ Run setup code once


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);  //in arrow function
    
} )('pawan') 
// this is simple iife (unnamed)
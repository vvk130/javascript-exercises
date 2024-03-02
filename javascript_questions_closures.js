// Lexical scope

// "closure" gives you access to an outer functionäs scope from an inner function

// Closure makes it possible to have private variables in javaacript

function makeFunc(){
    var name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

makeFunc()(); // Mozilla

// Q: closure scope chain?

// 3 scopes

// - local scope
// - outer functions scope
// - global scope


function makeFunc(){
    var name = "Mozilla";
    function displayName(){ // this function has also access to global scope
        console.log(name);
        // if we had function here it would have access to all scopes
    }
    return displayName;
}

makeFunc()(); // output: Mozilla


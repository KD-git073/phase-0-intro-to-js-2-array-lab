// Write your solution here!
let cats= ['Milo', 'Otis', 'Garfield']

let copyCats2=[]
function removeLastCat(newCat){
    copyCats2= cats.slice(0,2);
    return copyCats2;

}
function removeFirstCat(newCat){
    copyCats2= cats.slice(1);
    return copyCats2;
}

console.log(cats)
function destructivelyAppendCat(newCat){
    cats.push(newCat);
} 
destructivelyAppendCat("Ralph")

console.log(cats)
function destructivelyPrependCat(newCat){
    cats.unshift(newCat);
} 
destructivelyPrependCat("Bob")

console.log(cats)

function destructivelyRemoveLastCat(newCat){
    cats.pop(newCat);
}
destructivelyRemoveLastCat()

console.log(cats)

function destructivelyRemoveFirstCat(newCat){
    cats.shift(newCat);
}
destructivelyRemoveFirstCat()
console.log(cats)

let copyCats=[]
function appendCat(newCat){
   
    copyCats = [...cats, 'Broom'];
    return copyCats;
}

function prependCat(newCat){
   
    copyCats = ['Arnold', ...cats,];
    return copyCats;
}
/* let copyCats2=[]
function removeLastCat(newCat){
    copyCats2= cats.slice(2);
    return copyCats;

}
function removeFirstCat(newCat){
    copyCats2= cats.slice(0);
} */
console.log("This is the last" &[cats])
console.log(copyCats)
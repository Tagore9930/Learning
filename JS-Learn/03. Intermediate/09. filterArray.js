 var testArray = [2, 4, 6, 3, 1, 5, 9, 8]

 console.log(testArray.fill("T", 2, 6));

 const myNumbers = [20, 19, 9, 84, 75, 38, 48, 789, 738, 56, 24, 37]

 const result1 = myNumbers.filter( (e) => e < 100 );
 const result2 = myNumbers.filter( (e) => e > 100 );
 const result3 = myNumbers.filter( (e) => e % 2 == 0 );
 const result4 = myNumbers.filter( (e) => e == 789 );

//  console.log(result1);
//  console.log(result2);
//  console.log(result3);
//  console.log(result4);

var user = ["Appa","Amma","Keshava","Jithendra","Tagore"];

// slice is get return value.

console.log(user.slice(2));
console.log(user.slice(0, 3));
console.log(user.slice(2, 4));

// splice is not get return value.
console.log(user);
user.splice(1, 2, "Tagore1", "Tagore2", 'kgjfd','gjdfg','gdfgjf');
console.log('main ',user);

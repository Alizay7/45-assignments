//making a array of contries and print its original order
let countriesToVisit: string[] = ["China","Denmark","Brazil","argentina"];
console.log("original order:",countriesToVisit);
//print the array in alphabetical order without modifying the actual array list
console.log("alphabetical order;",[...countriesToVisit].sort());
//show thatthe array is still in its orignal order
console.log("still in orignal order",countriesToVisit);
//print the array in reversed order without modifying the actual array list
console.log("reverse order:",[...countriesToVisit].reverse());
//show thatthe array is still in its orignal order
console.log("still in orignal order",countriesToVisit);
//we have changed the original array order now
console.log("original array reversed:",countriesToVisit.reverse());
//print the array to show that its back to its original order
console.log("back to original order:",countriesToVisit.reverse);
//print the array to show its order has been changed in alphabetical order now
console.log("orignal array reversed:",countriesToVisit.sort());
//we have changed the original array order again
console.log("original array reversed:",countriesToVisit.reverse());
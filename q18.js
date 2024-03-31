var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of contries and print its original order
var countriesToVisit = ["China", "Denmark", "Brazil", "argentina"];
console.log("original order:", countriesToVisit);
//print the array in alphabetical order without modifying the actual array list
console.log("alphabetical order;", __spreadArray([], countriesToVisit, true).sort());
//show thatthe array is still in its orignal order
console.log("still in orignal order", countriesToVisit);
//print the array in reversed order without modifying the actual array list
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//show thatthe array is still in its orignal order
console.log("still in orignal order", countriesToVisit);
//we have changed the original array order now
console.log("original array reversed:", countriesToVisit.reverse());
//print the array to show that its back to its original order
console.log("back to original order:", countriesToVisit.reverse);
//print the array to show its order has been changed in alphabetical order now
console.log("orignal array reversed:", countriesToVisit.sort());
//we have changed the original array order again
console.log("original array reversed:", countriesToVisit.reverse());

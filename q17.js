//creating a guestlist array
var guestList = ["Aliza", "Zain", "Ali", "SAfdar"];
//making variable for those gust who cannnot come
var dontCome = [0];
//print the name of guest who cannot come
console.log(dontCome, "ni aa sakty hain");
//add or remove values grom guestlist aaray
guestList.splice(0, 1, "Rehana");
//message print for bigger table
console.log("Good News | I Have Found A Bigger Table For Dinner");
//adding a new guest at starting index of array
guestList.unshift("noor");
//adding a new guest at ending index of array
guestList.push("Ahmed");
//add one new guest at middle index of array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Zahra");
//print message of uodated list
console.log("updated list of our Guests");
//sendind a invitation message to our guest one by one
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to dinner with me")); });
//inform that only two guests can be invited for dinner
console.log("unfortunately, the new table wont arrive on time, so i can only invite two guests to dinner with me");
//using while loop to remove guests from the array until only two names left
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry ".concat(removeGuest, ",i cant invite you to dinner"));
}
//sending last two guest from the list
console.log("invitation to last two guest");
guestList.forEach(function (lasttwo) { return console.log("luckely ".concat(lasttwo, ",you are still invited to dinner")); });
//removing last two guest from the list 
guestList.pop();
guestList.pop();
console.log("empty listL:", guestList);

//creating a guestlist array
let guestList = ["Aliza","Zain","Ali","SAfdar"];
//making variable for those gust who cannnot come
let dontCome = [0];
//print the name of guest who cannot come
console.log(dontCome,"ni aa sakty hain");
//add or remove values grom guestlist aaray
guestList.splice(0,1,"Rehana");
//message print for bigger table
console.log("Good News | I Have Found A Bigger Table For Dinner");
//adding a new guest at starting index of array
guestList.unshift("noor");
//adding a new guest at ending index of array
guestList.push("Ahmed");
//add one new guest at middle index of array
let middleIndex: number = Math.floor(guestList.length / 2);
//adding a new guest to middle index of array
guestList.splice(middleIndex,0,"Zahra");
//print message of uodated list
console.log("updated list of our Guests");
//sendind a invitation message to our guest one by one
guestList.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me`));

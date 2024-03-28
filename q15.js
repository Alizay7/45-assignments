var guestsList = ["Aliza", "Safdar", "Zain", "Rehana"];
var donotCome = guestsList[0];
console.log(donotCome, "naai aa sakti");
guestsList.splice(0, 1, "Alizay");
guestsList.forEach(function (guest) { return console.log("Salam ".concat(guest, ",would you like to dinner with me?")); });

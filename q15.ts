let guestsList = ["Aliza","Safdar","Zain","Rehana"];
let donotCome = guestsList[0];
console.log(donotCome,"naai aa sakti");
guestsList.splice(0,1,"Alizay");
guestsList.forEach(guest => console.log(`Salam ${guest},would you like to dinner with me?`));
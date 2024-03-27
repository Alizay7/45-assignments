var person = "aliza safdar";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(person.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));

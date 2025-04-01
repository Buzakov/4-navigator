//Адрес назначения
let addressLat = 12; //широта 
let addressLong = 16; //долгота

//Текущее положение пользователя
let positionLat = 2; //широта
let positionLong = 4; //долгота

//формула d = √((x2 - x1)² + (y2 - y1)²)
let x = addressLat - positionLat;
let y = addressLong - positionLong;
console.log(x);
console.log(y);
console.log(((x ** 2 ) + (y ** 2))** 0.5);

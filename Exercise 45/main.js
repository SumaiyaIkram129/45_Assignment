"use strict";
function car_info(manufacturer, model_number, ...keywords) {
    return {
        manufacturer: manufacturer,
        model_number: model_number,
        features: keywords
    };
}
let car_1 = car_info(`Toyota`, `Corolla`, `paint:white`);
let car_2 = car_info(`Lamborghini`, `Hurracan`, `Paint:red`);
let car_3 = car_info(`Rolls`, `Royce`, `Phantom`, `Paint:Blue`);
console.log(car_1);
console.log(car_2);
console.log(car_3);

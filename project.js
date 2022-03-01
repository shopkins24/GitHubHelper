"use strict"

// "Hello world"

let city = ["Los Angeles", "Orlando", "Toronto", "Seattle", "Dallas", "Colorado", "Phoenix"];

function cityGenerator(selectionOfCity){
    return selectionOfCity[Math.floor(Math.random()*selectionOfCity.length)]
}

let citySelection = cityGenerator(city);

let restaurant = ["Yard House", "P.F. Chang's", "Bonefish Grill", "Maggiano's Little Italy", "The Cheesecake Factory", "Pappadeaux Seafood Kitchen", "Benihana"];

function restaurantGenerator(selectionOfRestaurant){
    return selectionOfCity[Math.floor(Math.random()*selectionOfCity.length)]
}

let restaurantSelection = restaurantGenerator(restaurant);

let transportation = ["Bus", "Train", "Owned Car", "Rental Car", "Bike", "Motorcycle"];

function vehicleGenerator(selectionOfVehicle){
    selectionOfVehicle[Math.floor(Math.random()*selectionOfVehicle.length)]
}

let vehicleSelection = vehicleGenerator(transportation);

let entertainment = ["Music Concert", "Amusement Park", "City Tour", "Wine Tasting", "Mueseum", "Comedy Show", "Night Club"]

function entertainmentGenerator(selectionOfEntertainment){
    selectionOfEntertainment = myArray[Math.floor(Math.random() * myArray.length)]
}

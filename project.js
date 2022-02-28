"use strict"

// "Hello world"

let listOfCities = ["Los Angeles", "Orlando", "Toronto", "Seattle", "Dallas", "Colorado", "Phoenix"];

let listOfRestaurants = ["Yard House", "P.F. Chang's", "Bonefish Grill", "Maggiano's Little Italy", "The Cheesecake Factory", "Pappadeaux Seafood Kitchen", "Benihana"];

let listOfTransportation = ["Bus", "Train", "Owned Car", "Rental Car", "Bike", "Motorcycle"];

let listofEntertainment = ["Music Concert", "Amusement Park", "City Tour", "Wine Tasting", "Mueseum", "Comedy Show", "Night Club"]

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice
}

function cityGenerator(){
    let userCityHappy = false

    while(userCityHappy === false){
        let randomCity = randomGenerator(listOfCities)

        let userResponse = prompt(`Your randomly selected city is ${randomCity}. Are you happy with this selection?`)

        if(userResponse === 'yes'){
            alert(`See you in ${randomCity}`)
            userCityHappy = true
        }else if(userResponse === 'no'){
            userCityHappy = false   
        }switch(userResponse){
            case 'yes':
                console.log('City is confirmed');
                break;
            case 'no':
                console.log('Please try again');
                break;
    }
    }
}cityGenerator()

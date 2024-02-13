'use strict';

const bookings = [];
// Default Parameters
const createBooking = function(flightNum, numPassengers=1,price =100 * numPassengers){

    // //ES5
    // numPassengers = numPassengers || 1;
    // price = price || 100;
    const booking ={
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123',5,700);
createBooking('LH123',3,400);
createBooking('LH123',3);
createBooking('LH123',5);
createBooking('LH123', undefined,1000);


////////////////////////////////////////////////////////////////
//Value vs Reference

const flight = 'LH234';
const suraj = {
    name: 'Suraj',
    age: 25,
    city: 'Bangalore',
    passport:245678935
};

const checkIn = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    
    if(passenger.passport === 245678935){
        alert('Check in')
    } else {
        alert('Invalid Passport');
    }
}

checkIn(flight,suraj);
console.log(flight);
console.log(suraj);

const newPassport = function(person){
    person.passport = Math.floor(Math.random() *10000000000);
}

newPassport(suraj);
checkIn(flight,suraj);
console.log(suraj);
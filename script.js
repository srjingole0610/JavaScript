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



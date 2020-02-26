"use strict";


// 1. isHometown

// Define your function here
function isHometown(town) {
  return town === 'San Francisco';
}


// 2. getFullName

// Define your function here
function getFullName(fname, lname) {
  return `${fname} ${lname}`
}


// 3. calculateTotal

// Define your function here
function calculateTotal(base_price, state, tax=.05) {
  const subtotal = base_price * (1 + tax);
  let fee = 0;
  if (state === 'CA') {
    fee = .03 * subtotal;
  } else if (state === 'PA') {
    fee = 2;
  } else if (state === 'MA') {
    if (base_price <= 100) {
      fee = 1;
    } else {
      fee = 3;
    }
  }
  return subtotal + fee;
}

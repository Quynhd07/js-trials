"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (let i in items) {
    console.log(i)
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const results =[];
  for (let i=0; i< items.length; i+=2){
    results.push(items[i])
  }
  console.log(results);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  items.sort((a, b)=> a-b);
  console.log(items.slice(0, n).reverse());


}

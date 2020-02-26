"use strict";


// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  const word_counts = {};
  const phrase_list = phrase.split(' ');
  for (const word of phrase_list) {
    if (word in word_counts) {
      word_counts[word] += 1;
    } else {
      word_counts[word] = 1;
    }
  }
  return word_counts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
 const melon_prices = {
      2.50: ['Cantaloupe', 'Honeydew'],
      2.95: ['Watermelon'],
      3.25: ['Musk', 'Crenshaw'],
      14.25: ['Christmas']
  }
  if (!(price in melon_prices)){
    return None;
  }
  return melon_prices[price].sort();
}

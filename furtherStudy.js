"use strict";


function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1_set = new Set(words1);
  const words2_set = new Set(words2);

  const result = new Set();

  for (const word of words1_set){
    if (words2_set.has(word)){
      result.add(word);
    }
  }
  return Array.from(result)
}


function kidsGame(names) {
  // Replace this with your code
  const output = [names.shift()];
  const first_letter_to_words = {};

  for (const name of names) {
    if (!(name[0] in first_letter_to_words)) {
      first_letter_to_words[name[0]] = [name]; 
    } else {
      first_letter_to_words[name[0]].push(name);
    }
  }
  // while (names.length >= output.length) {
    while(true) {

    let last_word = output[output.length-1];
    let start_letter = last_word[last_word.length-1];

    if (!(start_letter in first_letter_to_words) || first_letter_to_words[start_letter].length == 0) {
      break;
    } else {
      let word = first_letter_to_words[start_letter].shift();
      output.push(word)
    }

  }
  return output;
}



    // if (first_letter_to_words[start_letter].hasOwnProperty(undefined) || !(start_letter in first_letter_to_words)){
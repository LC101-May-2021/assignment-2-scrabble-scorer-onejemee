// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! \n \n Enter a word to score:");
  //  console.log(oldScrabbleScorer(word)
  return word
};

function simpleScore(str) {
  let word = str.toUpperCase();
  let score1 = 0
  score1 = score1 + word.length;
  return score1;
};

function vowelBonusScore(str) {
  let word2 = str.toUpperCase();
  let score2 = 0;
  for (let i = 0; i < word2.length; i++) {
    if (word2[i] == "A" ||word2[i] =="E"||word2[i] =="I"||word2[i] =="O"||word2[i] =="U") {
      score2 = score2 + 3
    } else {
        score2 = score2 + word2[i].length;
    }
  }
  return score2;
}

let simple_Score = {
  name: "Simple Score",
  description: "Each letter is worth 1 point",
  scoringFunction: simpleScore
};

let vowel_BonusScore = {
 name: "Bonus Vowels",
 description: "Vowels are 3 pts, consonants are 1 pt.",
 scoringFunction: vowelBonusScore
};

let scrabble_Scorer = {
 name: "Scrabble",
 description: "The traditional scoring algorithm.",
 scoringFunction: oldScrabbleScorer
};

function scrabbleScore(str) {
  let word3 = str.toLowerCase()
  let score3 = 0
  for (let i = 0; i < word3.length; i++) {
    let character = word3[i]
    score3 = score3 + newPointStructure[character] 
  }
return score3
} ;
scrabble_Scorer.scoringFunction = scrabbleScore
const scoringAlgorithms = [];
scoringAlgorithms.push(simple_Score, vowel_BonusScore, scrabble_Scorer);


function scorerPrompt(word) {
  let scoreType = input.question("Which scoring algorithm would you like to use? \n 0 - Simple: One point per characte \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2:")
  if (scoreType == 0) {
    return console.log(`Score for ${word}: ${scoringAlgorithms[0].scoringFunction(word)}`)
  } else if (scoreType == 1) {
     return console.log(`Score for ${word}: ${scoringAlgorithms[1].scoringFunction(word)}`) }
      else if (scoreType == 2) {
        return console.log(`Score for ${word}: ${scoringAlgorithms[2].scoringFunction(word)}`)
      } else {
        console.log("We can not score the word with this input. Please select another number.")
      }
}


function transform(obj) { 
  let newObj = {}
  for (let i in obj) {
    for (let x = 0; x < obj[i].length; x++){
      let letter = obj[i][x]
      newObj[letter.toLowerCase()] = Number(i);  
    }
  }
      return newObj
}

let newPointStructure = transform(oldPointStructure);
 

function runProgram() {
  transform(oldPointStructure)
  scorerPrompt(initialPrompt());


   
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};


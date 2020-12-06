import { Component, OnInit } from '@angular/core';

import { Board, Guess, Combination } from '../board';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  /**
   * the initial board
   */
  board : Board = {
    maxTries : 7,
    fields : 4,
    colors : 6,
    guesses : [],
    secretCombination : {
      items : []
    }
  };

  combination : Combination = {
    items : []
  }

  gameWon : boolean = false
  gameLost : boolean = false

  constructor() { }

  ngOnInit(): void {
    console.log("board view created")
    this.board.secretCombination = this.createSecretCombination()
    for (let i = 0; i < this.board.fields; i++) {
      this.combination.items[i] = 1
    }
  }

  onGuess(): void {
    console.log("guessed", this.combination)

    var newGuess : Guess = this.evaluateGuess(this.combination)
    if (newGuess.correct == this.board.fields) {
      this.gameWon = true
    }
    this.board.guesses.push(newGuess)
    if (!this.gameWon && this.board.guesses.length == this.board.maxTries) {
      this.gameLost = true
    }
  }

  evaluateGuess(combination : Combination) : Guess {

    /* create a copy of the combination */
    var guessCombination : Combination = {
      items : []
    }
    for (let i = 0; i < this.board.fields; i++) {
      guessCombination.items[i] = combination.items[i];
    }

    var correct : number = 0
    var correctColors : number = 0
    var usedFields : boolean[] = new Array(this.board.fields);
    for (let i = 0; i < this.board.fields; i++) {
      usedFields[i] = false
    }
    console.log("usedFields start", usedFields)

    /* count perfect items */
    for (let i = 0; i < this.board.fields; i++) {
      if (guessCombination.items[i] == this.board.secretCombination.items[i]) {
        /* found a perfect item */
        correct++;
        usedFields[i] = true;
      }
    }
    console.log("usedFields after perfect count", usedFields)

    /* count matching colors on wrong position */
    for (let i = 0; i < this.board.fields; i++) {
      for (let j = 0; j < this.board.fields; j++) {
        if (i != j
          && usedFields[j] == false
          && guessCombination.items[i] == this.board.secretCombination.items[j]) {
          correctColors++;
          usedFields[j] = true;
        }
      }
    }
    console.log("usedFields after colors count", usedFields)

    var newGuess : Guess = {
      combination : guessCombination,
      correct: correct,
      correctColors: correctColors
    }

    return newGuess
  }

  /**
   * Creates a random combination.
   */
  createSecretCombination() : Combination {

    var result : Combination = {
      items : []
    }
    for (let i = 0; i < this.board.fields; i++) {
      result.items.push(this.randomNumber(this.board.colors))
    }
    return result
  }

  /**
   * Creates a random number between 1 (inclusive) and maxValue (inclusive).
   */
  randomNumber(maxValue : number) : number {

    return Math.floor(Math.random() * maxValue) + 1
  }

  /**
   * Creates an array containing a sequence of numbers.
   * This can be used in a template to realize a
   * for i=number to number loop
   */
  numberArray(minValue : number, maxValue : number) : number[] {
    var result : number[] = [];
    for (let i = minValue; i <= maxValue; i++) {
      result.push(i);
    }
    return result;
  }
}

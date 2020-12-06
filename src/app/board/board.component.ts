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

    this.board.guesses.push(this.evaluateGuess(this.combination))
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

    // TODO evaluate correct and correctColors

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

  numberArray(minValue : number, maxValue : number) : number[] {
    var result : number[] = [];
    for (let i = minValue; i <= maxValue; i++) {
      result.push(i);
    }
    return result;
  }
}

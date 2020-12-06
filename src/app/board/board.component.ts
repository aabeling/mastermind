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
    guesses : [],
    secretCombination : {
      c1: 0,
      c2: 0,
      c3: 0,
      c4: 0
    }
  };

  combination : Combination = {
    c1: 1,
    c2: 1,
    c3: 1,
    c4: 1
  }

  constructor() { }

  ngOnInit(): void {
    console.log("board view created")
    this.board.secretCombination = this.createSecretCombination()
  }

  onGuess(): void {
    console.log("guessed", this.combination)

    this.board.guesses.push(this.evaluateGuess(this.combination))
  }

  evaluateGuess(combination : Combination) : Guess {

    /* create a copy of the combination */
    var guessCombination : Combination = {
      c1: combination.c1,
      c2: combination.c2,
      c3: combination.c3,
      c4: combination.c4
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
      c1: this.randomNumber(6),
      c2: this.randomNumber(6),
      c3: this.randomNumber(6),
      c4: this.randomNumber(6)
    }

    return result
  }

  /**
   * Creates a random number between 1 (inclusive) and maxValue (inclusive).
   */
  randomNumber(maxValue : number) : number {

    return Math.floor(Math.random() * maxValue) + 1
  }
}

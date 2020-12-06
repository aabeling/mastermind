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
    guesses : []
    };

  combination : Combination = {
    c1: 1,
    c2: 1,
    c3: 1,
    c4: 1
  }

  secretCombination: Combination = {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0
  }

  constructor() { }

  ngOnInit(): void {
    console.log("board view created")
    this.secretCombination = this.createSecretCombination()
  }

  onGuess(): void {
    console.log("guessed", this.combination)

    this.board.guesses.push(this.evaluateGuess(this.combination))
  }

  evaluateGuess(combination : Combination) : Guess {

    var guessCombination : Combination = {
      c1: combination.c1,
      c2: combination.c2,
      c3: combination.c3,
      c4: combination.c4
    }

    var newGuess : Guess = {
      combination : guessCombination,
      correct: 0,
      correctColors: 0
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

  randomNumber(maxValue : number) : number {

    return Math.floor(Math.random() * maxValue) + 1
  }
}

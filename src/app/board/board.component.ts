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
    c1: "A",
    c2: "B",
    c3: "C",
    c4: "F"
  }

  constructor() { }

  ngOnInit(): void {
    console.log("board view created")
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
}

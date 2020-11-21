import { Component, OnInit } from '@angular/core';

import { Board } from '../board';

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
    guesses : [
      {
          combination : {
            c1: "A",
            c2: "B",
            c3: "C",
            c4: "D"
          },
          correct: 2,
          correctColors: 1
        },
        {
          combination : {
            c1: "F",
            c2: "B",
            c3: "B",
            c4: "A"
          },
          correct: 1,
          correctColors: 3
        }
      ]
    };

  constructor() { }

  ngOnInit(): void {

  }

}

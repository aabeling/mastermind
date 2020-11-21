/**
 * Represents the state of a mastermind board.
 */
export interface Board {

  maxTries : number;
  guesses : Guess[];

}

export interface Guess {

  combination: Combination;

  /**
   * Number of correct colors on correct positions
   */
  correct: number;

  /**
   * Number of correct colors on wrong positions
   */
  correctColors: number;
}

export interface Combination {
  c1: string;
  c2: string;
  c3: string;
  c4: string;
}


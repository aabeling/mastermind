/**
 * Represents the state of a mastermind board.
 */
export interface Board {

  maxTries : number;
  colors : number;
  fields : number;
  guesses : Guess[];
  secretCombination : Combination;
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
  items : number[]
}


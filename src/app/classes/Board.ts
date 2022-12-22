import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rook } from "./Rook";
import { Spot } from "./Spot";

export class Board {
  boxes: any = Array(8).fill(0).map((x) => Array(8).fill(0));
  deneme!: any;
  constructor() {
    console.log("Board constructor");
    console.log(this.boxes);
    this.board();
  }
  board() {
    this.boxes[0][0] = new Spot(new Rook(false, 'Kale', 0, 0), 0, 0,);
    this.boxes[0][1] = new Spot(new Knight(false, 'At', 1, 0), 1, 0,);
    this.boxes[0][2] = new Spot(new Bishop(false, 'Fil', 2, 0), 2, 0,);
    this.boxes[0][3] = new Spot(new King(false, 'Kral', 3, 0), 3, 0);
    this.boxes[0][4] = new Spot(new Queen(false, 'Vezir', 4, 0), 4, 0);
    this.boxes[0][5] = new Spot(new Bishop(false, 'Fil', 5, 0), 5, 0);
    this.boxes[0][6] = new Spot(new Knight(false, 'At', 6, 0), 6, 0);
    this.boxes[0][7] = new Spot(new Rook(false, 'Kale', 7, 0), 7, 0);
    for (let i = 0; i < 8; i++) {
      this.boxes[1][i] = new Spot(new Pawn(false, 'Piyon', i, 1), i, 1);
    }
    //  black pieces
    this.boxes[7][7] = new Spot(new Rook(true, 'Kale', 0, 7,), 0, 7,);
    this.boxes[7][6] = new Spot(new Knight(true, 'At', 1, 7,), 1, 7,);
    this.boxes[5][7] = new Spot(new Bishop(true, 'Fil', 2, 7,), 2, 7,);
    this.boxes[4][7] = new Spot(new King(true, 'Kral', 3, 7), 3, 7);
    this.boxes[3][7] = new Spot(new Queen(true, 'Vezir', 4, 7), 4, 7);
    this.boxes[2][7] = new Spot(new Bishop(true, 'Fil', 5, 7), 5, 7);
    this.boxes[1][7] = new Spot(new Knight(true, 'At', 6, 7), 6, 7);
    this.boxes[0][7] = new Spot(new Rook(true, 'Kale', 7, 7), 7, 7);
    console.log()
    for (let i = 0; i < 8; i++) {
      this.boxes[6][i] = new Spot(new Pawn(true, 'Piyon', i, 6), i, 6);
    }
    // boş hücreleri null olarak atar
    for (let i = 2; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        this.boxes[i][j] = new Spot(null, j, i);
      }
    }
  }
  getBoxes() {
    console.log('Get boxes');
    return this.boxes
  }
}

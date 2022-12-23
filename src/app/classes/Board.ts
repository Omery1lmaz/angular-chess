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
    this.boxes[0][0] = new Spot(null, 0, 0);
    this.boxes[0][1] = new Spot(null, 0, 1);
    this.boxes[0][2] = new Spot(null, 0, 2);
    this.boxes[0][3] = new Spot(new Queen(false, 'Vezir', 0, 3), 0, 3);
    this.boxes[0][4] = new Spot(null, 0, 4);
    this.boxes[0][5] = new Spot(null, 0, 5);
    this.boxes[0][6] = new Spot(null, 0, 6);
    this.boxes[0][7] = new Spot(null, 0, 7);


    // this.boxes[0][0] = new Spot(new Rook(false, 'Kale',  0, 0), 0, 0);
    // this.boxes[0][1] = new Spot(new Knight(false, 'At',  0, 1), 0, 1);
    // this.boxes[0][2] = new Spot(new Bishop(false, 'Fil', 0, 2), 0, 2);
    // this.boxes[0][3] = new Spot(new King(false, 'Kral',  0, 3), 0, 3);
    // this.boxes[0][4] = new Spot(new Queen(false, 'Vezir',0, 4), 0, 4);
    // this.boxes[0][5] = new Spot(new Bishop(false, 'Fil', 0, 5), 0, 5);
    // this.boxes[0][6] = new Spot(new Knight(false, 'At',  0, 6), 0, 6);
    // this.boxes[0][7] = new Spot(new Rook(false, 'Kale',  0, 7), 0, 7);
    for (let i = 0; i < 8; i++) {
      // this.boxes[1][i] = new Spot(new Pawn(false, 'Piyon', 1, i), 1, i);
      this.boxes[1][i] = new Spot(null, 1, i);
    }
    //  black pieces
    this.boxes[7][0] = new Spot(new Rook(true, 'Kale', 7, 0,), 7, 0,);
    this.boxes[7][1] = new Spot(new Knight(true, 'At', 7, 1,), 7, 1,);
    this.boxes[7][2] = new Spot(new Bishop(true, 'Fil', 7, 2,), 7, 2,);
    this.boxes[7][3] = new Spot(new King(true, 'Kral', 7, 3), 7, 3);
    this.boxes[7][4] = new Spot(new Queen(true, 'Vezir', 7, 4), 7, 4);
    this.boxes[7][5] = new Spot(new Bishop(true, 'Fil', 7, 5), 7, 5);
    this.boxes[7][6] = new Spot(new Knight(true, 'At', 7, 6), 7, 6);
    this.boxes[7][7] = new Spot(new Rook(true, 'Kale', 7, 7), 7, 7);
    for (let i = 0; i < 8; i++) {
      // this.boxes[6][i] = new Spot(new Pawn(true, 'Piyon', 6, i), 6, i);
      this.boxes[6][i] = new Spot(null, 6, i);
    }
    // boş hücreleri null olarak atar
    for (let i = 2; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        this.boxes[i][j] = new Spot(null, i, j);
      }
    }
  }
  getBoxes() {
    console.log('Get boxes');
    return this.boxes
  }
}

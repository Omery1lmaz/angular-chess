import { Bishop } from './Bishop';
import { King } from './King';
import { Knight } from './Knight';
import { Pawn } from './Pawn';
import { Queen } from './Queen';
import { Rook } from './Rook';
import { Spot } from './Spot';

export class Board {
  boxes: any = Array(8)
    .fill(0)
    .map(() => Array(8).fill(0));
  constructor() {
    this.board();
  }
  board() {
    //  Black pieces
    this.boxes[0][0] = new Spot(new Rook(false, 'rook', 0, 0), 0, 0);
    this.boxes[0][1] = new Spot(new Knight(false, 'knight', 0, 1), 0, 1);
    this.boxes[0][2] = new Spot(new Bishop(false, 'bishop', 0, 2), 0, 2);
    this.boxes[0][3] = new Spot(new King(false, 'king', 0, 3), 0, 3);
    this.boxes[0][4] = new Spot(new Queen(false, 'queen', 0, 4), 0, 4);
    this.boxes[0][5] = new Spot(new Bishop(false, 'bishop', 0, 5), 0, 5);
    this.boxes[0][6] = new Spot(new Knight(false, 'knight', 0, 6), 0, 6);
    this.boxes[0][7] = new Spot(new Rook(false, 'rook', 0, 7), 0, 7);
    // Black Pawns
    for (let i = 0; i < 8; i++) {
      this.boxes[1][i] = new Spot(new Pawn(false, 'pawn', 1, i), 1, i);
    }
    //  white pieces
    this.boxes[7][0] = new Spot(new Rook(true, 'rook', 7, 0), 7, 0);
    this.boxes[7][1] = new Spot(new Knight(true, 'knight', 7, 1), 7, 1);
    this.boxes[7][2] = new Spot(new Bishop(true, 'bishop', 7, 2), 7, 2);
    this.boxes[7][4] = new Spot(new Queen(true, 'queen', 7, 4), 7, 4);
    this.boxes[7][3] = new Spot(new King(true, 'king', 7, 3), 7, 3);
    this.boxes[7][5] = new Spot(new Bishop(true, 'bishop', 7, 5), 7, 5);
    this.boxes[7][6] = new Spot(new Knight(true, 'knight', 7, 6), 7, 6);
    this.boxes[7][7] = new Spot(new Rook(true, 'rook', 7, 7), 7, 7);
    // White Pawns
    for (let i = 0; i < 8; i++) {
      this.boxes[6][i] = new Spot(new Pawn(true, 'pawn', 6, i), 6, i);
    }
    // throws blank cells as null
    for (let i = 2; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        this.boxes[i][j] = new Spot(null, i, j);
      }
    }
  }
  getBoxes() {
    return this.boxes;
  }
  resetTable(): any {
    this.board();
    return this.boxes;

  }
}

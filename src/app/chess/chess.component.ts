import { Component } from '@angular/core';
import { Board } from '../classes/Board';
import { Move } from '../interfaces/move';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss'],
})
export class ChessComponent {
  table: any;
  isSelected!: any;
  board: Board;
  deneme: boolean = true;
  queue: boolean = true; // true = white
  gameOver = false;

  constructor() {
    this.board = new Board();
    this.table = this.board.getBoxes();
    const test = this.checkMate();
  }
  getColor(piece: any, item: number) {
    const isDark: boolean = (piece.x + piece.y) % 2 === 0
    return isDark ? true : false;
  }

  restartGame() {
    this.board.resetTable()
    this.gameOver = false;
    this.queue = true;
  }
  click(piece: any) {
    if (piece.piece?.white && this.queue) {
      if (piece.piece != null) {
        this.isSelected = piece
      }
    } else if (piece.piece?.white == false && !this.queue) {
      this.isSelected = piece
    }
  }
  move(toX: number, toY: number): any {
    const move: Move = { board: this.table, toX, toY }
    if (this.isSelected) {
      const act = this.isSelected.piece.move(move)
      this.table = this.board.getBoxes()
      this.isSelected = undefined;
      if (act) {
        this.queue = !this.queue
        const checkMate = this.checkMate()
        checkMate ? this.gameOver = this.gameOver : this.gameOver = !this.gameOver
      }
    }
  }
  checkMate(): any {
    let white: boolean = false;
    let black: boolean = false;
    for (let i = 0; i < this.table.length; i++) {
      for (let j = 0; j < this.table[i].length; j++) {
        if (this.table[i][j].piece?.name == "king" && this.table[i][j].piece?.white) {
          white = true;
        } else if (this.table[i][j].piece?.name == "king" && !this.table[i][j].piece?.white) {
          black = true;
        }
      }
    }
    if (white && black) {
      return true;
    } else return false;

  }
}

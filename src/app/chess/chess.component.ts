import { Component } from '@angular/core';
import { Board } from '../classes/Board';

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
    console.log(this.board.getBoxes())
    const test = this.checkMate();
    console.log(test, "Test deneme 123")
  }
  getColor(piece: any, item: number) {
    const isDark: boolean = (piece.x + piece.y) % 2 === 0
    // console.log(isDark, "isDark");
    return isDark ? true : false;
  }

  restartGame() {
    console.log(this.board.resetTable());
    this.gameOver = false;
    this.queue = true;
  }
  click(piece: any) {
    if (piece.piece?.white && this.queue) {
      this.isSelected = piece
      console.log(piece.piece, "isSelected");
      console.log("Beyaz taraf seçti");
    } else if (piece.piece?.white == false && !this.queue) {
      this.isSelected = piece
      console.log(piece.piece, "isSelected");
      console.log('Siyah taraf Seçti')
    }
  }
  move(piece: any, toX: number, toY: number): any {
    console.log(piece, "move")
    console.log("Move metodu sad", this.isSelected.x, this.isSelected.y)
    console.log("Move metodu çaliştirildi", toX, toY)
    console.log("if koşulu", toX && toY && this.isSelected.x && this.isSelected.y)
    if (this.isSelected) {
      console.log("Move method if koşulu sağlandı")
      const test = this.isSelected.piece.move(this.table, this.isSelected.x, this.isSelected.y, toX, toY)
      this.table = this.board.getBoxes()
      this.isSelected = undefined;
      if (test) {
        this.queue = !this.queue
        // this.checkMate() ? this.gameOver = false : true
        const checkMate = this.checkMate()
        checkMate ? this.gameOver = this.gameOver : this.gameOver = !this.gameOver
        console.log(this.gameOver, "gameover denemeeeeeee")
      }
    }
  }
  checkMate(): any {
    let white: boolean = false;
    let black: boolean = false;
    for (let i = 0; i < this.table.length; i++) {
      for (let j = 0; j < this.table[i].length; j++) {
        if (this.table[i][j].piece?.name == "king" && this.table[i][j].piece?.white) {
          console.log(this.table[i][j], "King var beyaz");
          white = true;
        } else if (this.table[i][j].piece?.name == "king" && !this.table[i][j].piece?.white) {
          console.log(this.table[i][j], "King var siyah");
          black = true;
        }
      }
    }
    if (white && black) {
      console.log('white and black', white, black);
      return true;
    } else return false;

  }
}

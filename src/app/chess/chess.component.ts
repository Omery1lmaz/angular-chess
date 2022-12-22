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
  constructor() {
    this.board = new Board();
    this.table = this.board.getBoxes();
    console.log(this.board.getBoxes())
  }

  click(piece: any) {
    this.isSelected = piece
    console.log(this.isSelected, "isSelected");
  }

  move(piece: any, toX: number, toY: number): any {
    console.log("Move metodu sad", this.isSelected.x, this.isSelected.y)
    console.log("Move metodu çaliştirildi")
    if (toX && toY && this.isSelected.x && this.isSelected.y) {
      const test = this.isSelected.piece.move(this.table, this.isSelected.x, this.isSelected.y, toX, toY)
      console.log(test)
      this.isSelected = undefined;
    }

    this.table = this.board.getBoxes()
    console.log("Board", this.board)
  }
}

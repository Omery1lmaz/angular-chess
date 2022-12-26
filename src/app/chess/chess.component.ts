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

  constructor() {
    this.board = new Board();
    this.table = this.board.getBoxes();
    console.log(this.board.getBoxes())
  }

  click(piece: any) {
    console.log(piece, "piece");
    if (piece.piece) {
      this.isSelected = piece
      console.log(piece.piece, "isSelected");
    }
  }

  move(piece: any, toX: number, toY: number): any {
    console.log(piece, "move")
    console.log("Move metodu sad", this.isSelected.x, this.isSelected.y)
    console.log("Move metodu çaliştirildi", toX, toY)
    console.log("if koşulu", toX && toY && this.isSelected.x && this.isSelected.y)
    if (true) {
      console.log("Move method if koşulu sağlandı")
      const test = this.isSelected.piece.move(this.table, this.isSelected.x, this.isSelected.y, toX, toY)
      console.log(test)
      this.isSelected = undefined;
    }

    this.table = this.board.getBoxes()
    console.log("Board", this.board)
  }
}

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bishop } from '../classes/Bishop';
import { Board } from '../classes/Board';
import { Knight } from '../classes/Knight';
import { Queen } from '../classes/Queen';
import { Rook } from '../classes/Rook';
import { Spot } from '../classes/Spot';
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
  queue: boolean = true; // true = white
  gameOver = false;
  pawnAtTheLastSpot: boolean = true;
  modalPieces: Array<String> = ['Rook', 'Queen', 'Knight', 'Bishop']
  lastMovedPiece: any = null;
  @ViewChild('content') content!: TemplateRef<any>;
  constructor(config: NgbModalConfig, private modalService: NgbModal, board: Board) {
    this.table = board.getBoxes();
    config.backdrop = 'static';
    config.keyboard = false;
    this.board = board;
  }
  getColor(piece: any) {
    const isDark: boolean = (piece.x + piece.y) % 2 === 0
    return isDark ? true : false;
  }
  open(content: any) {
    this.modalService.open(content);
  }

  changePawn(item: any) {
    const piece = this.lastMovedPiece.piece
    const x = piece.x
    const y = piece.y
    if (item == 'Knight') {
      this.board.boxes[y][x] = new Spot(new Knight(piece.white, 'knight', y, x), y, x);
      console.log('Knight')
    } else if (item == 'Bishop') {
      this.board.boxes[y][x] = new Spot(new Bishop(piece.white, 'bishop', y, x), y, x);
      console.log('Bishop')
    } else if (item == 'Queen') {
      this.board.boxes[y][x] = new Spot(new Queen(piece.white, 'queen', y, x), y, x);
      console.log('Queen')
    } else if (item == 'Rook') {
      this.board.boxes[y][x] = new Spot(new Rook(piece.white, 'rook', y, x), y, x);
      console.log(this.table)
      console.log('Rook')
    }
    this.table = this.board.getBoxes()
    this.modalService.dismissAll();
  }

  restartGame() {
    this.board.resetTable()
    this.gameOver = false;
    this.queue = true;
  }
  click(piece: any) {
    //check piece color and queue colorS
    if (piece.piece?.white && this.queue) {
      if (piece.piece != null) {
        this.isSelected = piece
      }
    } else if (piece.piece?.white == false && !this.queue) {
      this.isSelected = piece
    }
  }

  move(toX: number, toY: number, piece: any): any {
    const move: Move = { board: this.table, toX, toY }
    if (this.isSelected) {
      const act = this.isSelected.piece.move(move)
      this.table = this.board.getBoxes()
      this.isSelected = undefined;
      if (act) {
        this.queue = !this.queue
        const checkMate = this.checkMate()
        checkMate ? this.gameOver = this.gameOver : this.gameOver = !this.gameOver
        this.lastMovedPiece = piece
        this.pawnAtTheLastSpot = this.lastMovedPiece.piece.name == 'pawn' ? this.lastMovedPiece.piece.isItAtLastSpot(this.lastMovedPiece.piece.y) : false
        // change pawn modal
        if (this.pawnAtTheLastSpot) {
          this.open(this.content)
        }
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

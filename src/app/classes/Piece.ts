import { Move } from "../interfaces/move";

export abstract class Piece {
  name!: string;
  white: boolean = false;
  ismoved?= false;
  x!: number;
  y!: number;
  constructor(white: boolean, name: string, y: number, x: number) {
    this.name = name;
    this.white = white;
    this.x = x;
    this.y = y;
  }

  //Parçayı Yerleştirme
  PutPiece(move: Move) {
    move.board[this.y][this.x].piece.ismoved = true;
    move.board[move.toY][move.toX].piece = move.board[this.y][this.x].piece;
    move.board[this.y][this.x].piece = null;
    this.x = move.toX;
    this.y = move.toY;
    return true;
  }
  move(move: Move) { }
  canMove(move: Move) { }

  getParams(move: Move) {
    const board = move.board;
    let toX = move.toX
    let toY = move.toY;
    const x = this.x
    const y = this.y
    const piece = this
    const toBoard = move.board[toY][toX].piece
    return { board, toX, toY, piece, x, y, toBoard }
  }
}

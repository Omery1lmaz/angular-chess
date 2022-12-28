import { Move } from '../interfaces/move';
import { Board } from './Board';
import { Piece } from './Piece';

export class Rook extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
  }
  override move(
    move: Move
  ) {
    if (this.canMove(move)) {
      return this.PutPiece(move);
    } else {
      return false;
    }
  }
  override canMove(
    move: Move
  ) {
    console.log(move.toX, move.toY, 'TOX TOY ');
    // console.log(this.getPossibleMoves(board, start, end, move.toX, move.toY));
    if ((move.toX == this.x && move.toY != this.y) || (move.toY == this.y && move.toX != this.x)) {
      console.log('İf koşul sağlandı');
      if (!this.getPossibleMoves(move)) {
        console.log('deneme 23');
        if (move.board[move.toY][move.toX].piece?.white != this.white) {
          console.log('deneme 24');
          return true;
        } else return false;
      } else return false;
      // gidilecek yerde parça varsa ve parça aynı renk değilse
    } else return false;
  }

  // test(toY: number): any {
  //   if (this.y > toY) {
  //     return false;
  //   }
  //   return true;
  // }
  // test2(move.toX: number) {
  //   if (this.x > move.toX) {
  //     return false;
  //   }
  //   return true;
  // }
  override getPossibleMoves(
    move: Move
  ): any {
    // let deneme: boolean = false;
    return this.forwardWalking(move);

    // return deneme;
  }
}

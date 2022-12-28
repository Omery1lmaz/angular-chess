import { Move } from '../interfaces/move';
import { Board } from './Board';
import { Piece } from './Piece';

export class Pawn extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
  }
  override move(
    move: {
      board: any,
      toX: number,
      toY: number
    }
  ) {
    console.log(move.toX, "Move parametreleri")
    if (this.canMove(move)) {
      return this.PutPiece(move)
    } else {
      console.log('Move metodu calismadi');
      return false;
    }
  }

  // (this.ismoved && (toY = (this.y + 1))) && (!this.ismoved && (toY = (this.y + 1 || this.y + 2))) && this.isAvailable(toX, toY)
  override canMove(
    move: Move
  ) {
    const { board, toX, toY, piece, x, y, toBoard } = this.getParams(move)
    console.log('deneme');
    const deneme: number = this.white ? -1 : 1
    const deneme1: number = this.white ? -2 : 2
    const moveforward: boolean = (toY == y + deneme1)
    const moveforward1: boolean = (toY == y + deneme)
    const yemeIslemi: boolean = (toBoard !== null) && (x == toX - 1 || x == toX + 1) && toBoard?.white != this.white
    if (this.getPossibleMoves(move)) {
      // if (this.white) {
      // Piyon hareket etmemişse ve iki kare ileri gidecekse
      if (!this.ismoved && (moveforward) && x == toX) {
        if (toBoard == null) {
          return true;
        } else {
          return false;
        }
      }
      // Piyon bir ileri gitmişse
      else if (moveforward1) {
        // Gidilecek yer boşsa ve x değeri doğruysa
        if (toBoard == null && toX == x) {
          console.log('iki');
          return true;
        }
        // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
        else if (
          yemeIslemi
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else return false;
  }
  override getPossibleMoves(
    move: Move
  ): boolean {
    const { board, toX, toY, piece, x, y } = this.getParams(move)
    const deneme = toY == y - 2 ? board[toY + 1][x].piece : board[toY - 1][y].piece
    // İki ilerisi giderse 1 önceki kareyi kontrol et
    if (deneme) {
      return false;
    } else return true;
  }
}

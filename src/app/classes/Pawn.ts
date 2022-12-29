import { CheckPiecesAtPositionForward, Move } from '../interfaces/move';
import { Piece } from './Piece';

export class Pawn extends Piece implements CheckPiecesAtPositionForward {
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
    if (this.canMove(move)) {
      return this.PutPiece(move)
    } else {
      return false;
    }
  }

  override canMove(
    move: Move
  ) {
    const { toX, toY, x, y, toBoard } = this.getParams(move)
    const isItOneSquare: number = this.white ? -1 : 1
    const isItTwoSquare: number = this.white ? -2 : 2
    const twoSquareControle: boolean = (toY == y + isItTwoSquare)
    const oneSquareControle: boolean = (toY == y + isItOneSquare)
    const killControle: boolean = (toBoard !== null) && (x == toX - 1 || x == toX + 1) && toBoard?.white != this.white

    if (this.CheckPiecesAtPositionForward(move)) {
      // Piyon hareket etmemişse ve iki kare ileri gidecekse
      console.log('Deneme')
      if (!this.ismoved && (twoSquareControle) && x == toX) {
        if (toBoard == null) {
          return true;
        } else {
          return false;
        }
      }
      // Piyon bir ileri gitmişse
      else if (oneSquareControle) {
        console.log('Deneme')
        // Gidilecek yer boşsa ve x değeri doğruysa
        if (toBoard == null && toX == x) {
          console.log('Deneme 2')
          return true;
        }
        // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
        else if (
          killControle
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
  CheckPiecesAtPositionForward(
    move: Move
  ): boolean {
    const { board, toY, x, y } = this.getParams(move)
    let isCan = false;
    if (this.white) {
      if (toY == y - 2 && board[toY + 1][x].piece) {
        isCan = false
      } else isCan = true;
    } else {
      if (toY == y + 2 && board[toY - 1][x].piece) { isCan = false } else isCan = true
    }
    return isCan
  }
}

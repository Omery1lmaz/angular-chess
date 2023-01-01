import { CheckPiecesAtPositionForward, Move } from '../interfaces/move';
import { Piece } from './Piece';

export class Pawn extends Piece implements CheckPiecesAtPositionForward {
  ismoved: boolean = false;
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
    const { toX, toY, x, y, toSpot } = this.getParams(move)
    const isItOneSquare: number = this.white ? -1 : 1
    const isItTwoSquare: number = this.white ? -2 : 2
    const twoSquareControle: boolean = (toY == y + isItTwoSquare)
    const oneSquareControle: boolean = (toY == y + isItOneSquare)
    const killControl: boolean = (toSpot !== null) && (x == toX - 1 || x == toX + 1) && toSpot?.white != this.white

    if (this.CheckPiecesAtPositionForward(move)) {
      // if the pawn has not moved and will move forward two squares
      if (!this.ismoved && (twoSquareControle) && x == toX) {
        if (toSpot == null) {
          return true;
        } else {
          return false;
        }
      }
      // one spot move
      else if (oneSquareControle) {
        // to Spot is null and x is right
        if (toSpot == null && toX == x) {
          return true;
        }
        // to Spot isn't null , x is right and toPiece is not same color
        else if (
          killControl
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
  isItAtLastSpot(toY: number) {
    if (this.white) {
      if (toY == 0) { return true; } return false;
    } else {
      if (toY == 7) { return true; } return false;
    }
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

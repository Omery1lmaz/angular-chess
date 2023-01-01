import { CheckPiecesAtPositionForward, CheckPiecesAtPositionCross, Move } from "../interfaces/move";
import { HelperService } from "../service/helper.service";
import { Piece } from "./Piece";

export class Queen extends Piece implements CheckPiecesAtPositionCross {
  helperService: HelperService;
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y)
    this.helperService = new HelperService()
  }

  override move(move: Move) {
    if (this.canMove(move)) {
      return this.PutPiece(move);
    } else {
      return false;
    }
  }
  override canMove(move: Move) {
    const { board, toX, toY, piece, x, y, toSpot } = this.getParams(move)
    const absX = move.toX - this.x;
    const absY = move.toY - this.y;
    const xNotEqualTox = ((toX == x) && (toY != y))
    const yNotEqualToy = ((toY == y) && (toX != x))

    if (Math.abs(absX) == Math.abs(absY)) {
      // if the Queen moves cross
      if (this.CheckPiecesAtPositionCross(move)) {
        return this.toSpotIsNull(toSpot)
      } else return false;
    } else if ((xNotEqualTox || yNotEqualToy)) {
      // if the Queen forward cross
      if (!this.helperService.Forwardmove(board, toX, toY, x, y)) {
        return this.toSpotIsNull(toSpot)
      } else return false;
    } else return false
  }

  CheckPiecesAtPositionCross(
    move: Move
  ): boolean {
    let { board, toX, toY, x, y, } = this.getParams(move)
    return this.helperService.crossMove(board, toY, toX, x, y);
  }

}

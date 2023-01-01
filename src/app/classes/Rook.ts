import { CheckPiecesAtPositionForward, Move } from '../interfaces/move';
import { HelperService } from '../service/helper.service';
import { Piece } from './Piece';

export class Rook extends Piece implements CheckPiecesAtPositionForward {
  helperService: HelperService;
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
    this.helperService = new HelperService();
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
    const { toX, toY, x, y, toSpot } = this.getParams(move)
    if ((toX == x && toY != y) || (toY == y && toX != x)) {
      // if the Rook moves forward
      if (!this.CheckPiecesAtPositionForward(move)) {
        return this.toSpotIsNull(toSpot)
      } else return false;
    } else return false;
  }

  CheckPiecesAtPositionForward(
    move: Move
  ): boolean {
    const { board, toX, toY, piece, x, y, toSpot } = this.getParams(move)
    return this.helperService.Forwardmove(board, toX, toY, x, y);
  }
}

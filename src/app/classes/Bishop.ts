import { CheckPiecesAtPositionCross, Move } from '../interfaces/move';
import { HelperService } from '../service/helper.service';
import { Piece } from './Piece';

export class Bishop extends Piece implements CheckPiecesAtPositionCross {
  helperService: HelperService;
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
    this.helperService = new HelperService();
  }

  override move(
    move: Move
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
    if (toX != x && toY != y) {
      const absX = toX - x;
      const absY = toY - y;
      if (Math.abs(absX) == Math.abs(absY)) {
        if (this.CheckPiecesAtPositionCross(move)) {
          if (this.white != toBoard?.white) {
            return true;
          } else {
            return false;
          }
        } else return false;
      } else return false;
    } else return false;
  }

  CheckPiecesAtPositionCross(
    move: Move
  ): boolean {
    let { board, toX, toY, x, y, } = this.getParams(move)

    return this.helperService.helper(board, toY, toX, x, y);
  }

}


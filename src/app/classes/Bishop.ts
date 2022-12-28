import { Move } from '../interfaces/move';
import { Board } from './Board';
import { Piece } from './Piece';

export class Bishop extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
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

    console.log(move.toX, move.toY, 'TOX TOY ', 'boardboxes', move.board[move.toX][move.toY]);
    if (move.toX != this.x && move.toY != this.y) {
      const absX = move.toX - this.x;
      const absY = move.toY - this.y;
      if (Math.abs(absX) == Math.abs(absY)) {
        if (this.Deneme(move)) {
          console.log('Get possible moves if koşulu')
          if (this.white != move.board[move.toY][move.toX].piece.piece?.white) {
            console.log('Renkler farklı karşıdaki taşı yiyebilir');
            return true;
          } else {
            console.log('Renkler aynı return false');
            return false;
          }
        } else return false;
      } else return false;
    } else return false;
  }

  test22(toY?: number): boolean {
    if (toY && toY > this.y) {
      console.log('true toy büyüktür')
      return true;
    } else {
      console.log('false toy küçüktür')
      return false;
    }
  }

  override getPossibleMoves(
    move: Move
  ): boolean {
    let response: boolean = true;
    const lastY: number = move.toY;
    const lastX: number = move.toX;

    console.log('GetPossibleMoves');
    if (this.white) {
      console.log('white');
      // if (!this.test(toY))
      console.log(this.y, move.toY, 'this.y toY')
      if (this.y > move.toY) {
        console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');
          console.log(lastX, lastY,)
          console.log('toY-1', move.toY + 1, 'this y', this.y);
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            move.toY++;
            move.toX++;
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log(move.board[move.toY][move.toX].piece, 'if parça dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        }
      } else {
        console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toX++;
            move.toY++;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        } console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY--;
            move.toX++;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY--;
            move.toX--;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        }
      }
    } else {

      if (this.y > move.toY) {
        if (this.x > move.toX) {
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY++;
            move.toX++;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        }
      } else {
        console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY++;
            move.toX++;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        } console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');
          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY--;
            move.toX++;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX].piece, 'console.log bir');
            move.toY--;
            move.toX--;
            if (move.board[move.toY][move.toX].piece.piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece.piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece.piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX].piece == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX].piece, move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return (response = false);
              }
            }

          }
        }
      }
    }
    // this.crossWalking(board, toX, toY);
    return response;
  }

}

import { debounceTime } from 'rxjs';
import { Board } from './Board';
import { Piece } from './Piece';

export class Bishop extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
  }

  override move(
    board: any,
    start: number,
    end: number,
    toX: number,
    toY: number
  ) {
    if (this.canMove(board, start, end, toX, toY)) {
      board[toY][toX].piece = board[this.y][this.x].piece;
      board[this.y][this.x].piece = null;
      this.x = toX;
      this.y = toY;
      return true;
    } else {
      return false;
    }
  }
  override canMove(
    board: any,
    start: number,
    end: number,
    toX: number,
    toY: number
  ) {

    console.log(toX, toY, 'TOX TOY ', 'boardboxes', board[toX][toY]);
    if (toX != this.x && toY != this.y) {
      const absX = toX - this.x;
      const absY = toY - this.y;
      if (Math.abs(absX) == Math.abs(absY)) {
        if (this.getPossibleMoves(board, this.x, this.y, toX, toY)) {
          if (this.white != board[toY][toX].piece?.white) {
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

  test(toY?: number): boolean {
    if (toY && toY > this.y) {
      console.log('true toy büyüktür')
      return true;
    } else {
      console.log('false toy küçüktür')
      return false;
    }
  }
  method123(
    board: any,
    start: number,
    end: number,
    toX: number,
    toY: number
  ): boolean {
    if (board[this.y][this.x].piece.white != board[toY][toX].piece.white) {
      return true
    } else return false;
  }
  override getPossibleMoves(
    board: any,
    start: number,
    end: number,
    toX: number,
    toY: number
  ): boolean {
    const lastX: number = toX;
    const lastY: number = toY;
    let response: boolean = true;
    console.log('GetPossibleMoves');
    if (this.white) {
      console.log('white');
      // if (!this.test(toY))
      console.log(this.y, toY, 'this.y toY')
      if (this.y > toY) {
        console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece ) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY++;
            toX++;
          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY++;
            toX--;
          }
        }
      } else {
        console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY++;
            toX++;
          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY++;
            toX--;
          }
        } console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y < toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY--;
            toX++;
          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY--;
            toX--;
          }
        }
      }
    } else {

      console.log('white');
      // if (!this.test(toY))
      console.log(this.y, toY, 'this.y toY')
      if (this.y > toY) {
        console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY++;
            toX++;
          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY++;
            toX--;
          }
        }
      } else {
        console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY++;
            toX++;
          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY++;
            toX--;
          }
        } console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');
          for (let sayac: number = 0; this.y < toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY--;
            toX++;
          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');

            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true;
              }
              console.log(board[toY][toX], 'if dolu');
              return (response = false);
            }
            toY--;
            toX--;
          }
        }
      }
    }
    return response;
  }

}

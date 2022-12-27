import { Piece } from "./Piece";

export class Queen extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y)
  }
  override move(board: any, start: number, end: number, toX: number, toY: number) {
    if (this.canMove(board, start, end, toX, toY) && this.isAvailable(board, toX, toY)) {
      board[toY][toX].piece = board[this.y][this.x].piece;
      board[this.y][this.x].piece = null;
      this.x = toX;
      this.y = toY;
      return true;
    } else {
      return false;
    }
  }
  override canMove(board: any, start: number, end: number, toX: number, toY: number) {
    const absX = toX - this.x;
    const absY = toY - this.y;
    console.log("this available")
    if (Math.abs(absX) == Math.abs(absY)) {
      if (this.getPossibleMoves(board, this.x, this.y, toX, toY)) {
        console.log("mutlak değer eşittir", board[toY][toX].piece?.white, 'this white', this.white)
        if (this.white == board[toY][toX].piece?.white) {
          console.log("Karşı taraf farklı ");
          return false;
        } else return true;
      } else return false;
    } else if ((((toX == this.x) && (toY != this.y)) || ((toY == this.y) && (toX != this.x)))) {
      if (!this.getPossibleMovesForward(board, this.x, this.y, toX, toY)) {
        if (this.white == board[toY][toX].piece?.white) {
          console.log("Karşı taraf farklı ");
          return false;
        } else return true;
      } else return false;
    } else return false
  }
  override getPossibleMoves(
    board: any,
    start: number,
    end: number,
    toX: number,
    toY: number
  ): boolean {
    let response: boolean = true;
    const lastX: number = toX;
    const lastY: number = toY;
    console.log('GetPossibleMoves');
    // this.crossWalking(board, toX, toY)
    if (this.white) {
      console.log('white');
      // if (!this.test(toY))
      console.log(this.y, toY, 'this.y toY')
      if (this.y > toY) {
        console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');
          console.log(lastX, lastY,)
          console.log('toY-1', toY + 1, 'this y', this.y);
          for (let sayac: number = 0; this.y > toY; sayac++) {
            toY++;
            toX++;
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            if (board[toY][toX].piece != null) {
              console.log(board[toY][toX], 'if parça dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY++;
            toX--;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        }
      } else {
        console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY++;
            toX++;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY++;
            toX--;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y < toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY--;
            toX++;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY--;
            toX--;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

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
            toY++;
            toX++;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY++;
            toX--;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        }
      } else {
        console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY++;
            toX++;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY++;
            toX--;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } console.log('y > toy');
        if (this.x > toX) {
          console.log('x > tox');
          for (let sayac: number = 0; this.y < toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY--;
            toX++;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(board[toY][toX], 'console.log bir');
            toY--;
            toX--;
            if (board[toY][toX].piece != null) {
              console.log('if dolu');
              if (board[toY][toX].piece == board[this.y][this.x].piece) {
                console.log(board[toY][toX].piece, 'if dolu');
                return true
              } else if (board[toY][toX] == board[lastY][lastX]) {
                console.log('Else if dolu', board[toY][toX], board[lastY][lastX]);
                break
              } else {
                console.log(board[toY][toX], 'if dolu');
                return (response = false);
              }
            }

          }
        }
      }
    } return response;
  }
  getPossibleMovesForward(
    board: any,
    start: number,
    end: number,
    toX: number,
    toY: number
  ): any {
    let deneme: boolean = false;

    if (this.y != toY) {
      for (
        let i: number = this.y;
        this.test(toY) ? i < toY : i > toY;
        this.test(toY) ? i++ : i--
      ) {
        console.log(i, toY, 'i toY');
        const deneme23: number = i - toY;
        console.log('For döngüsüne girildi' + deneme23);
        console.log(this.test(toY), 'test');
        console.log(board[i][this.x], 'board for döngüsü');
        if (board[i][this.x] == board[this.y][this.x]) {
          console.log('Parça Eşit');
        } else if (board[i][this.x].piece != null) {
          console.log('Engel var');
          deneme = true;
          break;
        }
      }
    } else if (this.x != toX) {
      console.log('Else if kontrolüne girildi ');
      for (
        let i: number = this.x;
        this.test2(toX) ? i < toX : i > toX;
        this.test2(toX) ? i++ : i--
      ) {
        console.log(i, toY, 'i toY');
        const deneme23: number = i - toY;
        console.log('For döngüsüne girildi' + deneme23);
        console.log(this.test(toY), 'test');
        console.log(board[this.y][i], 'Deneme 1414');
        if (board[this.y][i] == board[this.y][this.x]) {
          console.log('Parça eşit');
        } else if (board[this.y][i].piece != null) {
          console.log('Engel var');
          deneme = true;
          break;
        }
      }
    }
    return deneme;
  }

}

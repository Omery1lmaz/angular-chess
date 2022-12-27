import { Board } from "./Board";

export abstract class Piece {
  name!: string;
  white: boolean = false;
  ismoved?= false;
  x!: number;
  y!: number;
  constructor(white: boolean, name: string, y: number, x: number) {
    this.name = name;
    this.white = white;
    this.x = x;
    this.y = y;
  }
  move(board: Board, start: number, end: number, toX: number, toY: number) { }
  canMove(board: Board, start: number, end: number, toX: number, toY: number) { }
  getPossibleMoves(board: Board, start: number, end: number, toX: number, toY: number) { }
  isAvailable(board: any, toX: number, toY: number) {
    if (toX == this.x && toY == this.y && this.white == board[toY][toX].piece.white) { return false; }
    return true;
  }
  crossWalking(board: any, toX: number, toY: number): any {
    let response = false;
    const lastX: number = toX;
    const lastY: number = toY;
    console.log(this.x, "Corss Walking this.x")
    console.log(this.y, "Corss Walking this.y")
    console.log(this.white, "Corss Walking this.white")
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
              if (board[toY][toX].piece == board[this.y][this.x].piec) {
                console.log(board[toY][toX].piece, 'if dolu');
                response = true;
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
  }
  test(toY: number): any {
    if (this.y > toY) {
      return false;
    }
    return true;
  }
  test2(toX: number) {
    if (this.x > toX) {
      return false;
    }
    return true;
  }
  forwardWalking(board: any, toX: number, toY: number): any {
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
        return deneme;
      }
      return deneme;
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
      return deneme;
    }
    return deneme;
  }
}


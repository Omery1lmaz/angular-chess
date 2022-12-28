import { Move } from "../interfaces/move";
import { Piece } from "./Piece";

export class Queen extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y)
  }
  override move(move: Move) {
    if (this.canMove(move) && this.isAvailable(move)) {
      return this.PutPiece(move);
    } else {
      return false;
    }
  }
  override canMove(move: Move) {
    const absX = move.toX - this.x;
    const absY = move.toY - this.y;
    console.log("this available")
    if (Math.abs(absX) == Math.abs(absY)) {
      if (this.getPossibleMoves(move)) {
        // console.log("mutlak değer eşittir", board[move.toY][move.toX].piece?.white, 'this white', this.white)
        if (this.white == move.board[move.toY][move.toX].piece?.white) {
          console.log("Karşı taraf farklı ");
          return false;
        } else return true;
      } else return false;
    } else if ((((move.toX == this.x) && (move.toY != this.y)) || ((move.toY == this.y) && (move.toX != this.x)))) {
      if (!this.getPossibleMovesForward(move)) {
        if (this.white == move.board[move.toY][move.toX].piece?.white) {
          console.log("Karşı taraf farklı ");
          return false;
        } else return true;
      } else return false;
    } else return false
  }
  override getPossibleMoves(
    move: Move
  ): boolean {
    let response: boolean = true;
    const lastX: number = move.toX;
    const lastY: number = move.toY;
    console.log('GetPossibleMoves');
    // this.crossWalking(move.board, move.toX, move.toY)
    if (this.white) {
      console.log('white');
      // if (!this.test(move.toY))
      console.log(this.y, move.toY, 'this.y move.toY')
      if (this.y > move.toY) {
        console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');
          console.log(lastX, lastY,)
          console.log('move.toY-1', move.toY + 1, 'this y', this.y);
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            move.toY++;
            move.toX++;
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            if (move.board[move.toY][move.toX].piece != null) {
              console.log(move.board[move.toY][move.toX], 'if parça dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
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
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY--;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY--;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        }
      }
    } else {

      console.log('white');
      // if (!this.test(move.toY))
      console.log(this.y, move.toY, 'this.y move.toY')
      if (this.y > move.toY) {
        console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
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
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');
          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY--;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY--;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        }
      }
    } return response;
  }
  getPossibleMovesForward(
    move: Move
  ): any {
    let deneme: boolean = false;

    if (this.y != move.toY) {
      for (
        let i: number = this.y;
        this.test(move.toY) ? i < move.toY : i > move.toY;
        this.test(move.toY) ? i++ : i--
      ) {
        console.log(i, move.toY, 'i move.toY');
        const deneme23: number = i - move.toY;
        console.log('For döngüsüne girildi' + deneme23);
        console.log(this.test(move.toY), 'test');
        console.log(move.board[i][this.x], 'move.board for döngüsü');
        if (move.board[i][this.x] == move.board[this.y][this.x]) {
          console.log('Parça Eşit');
        } else if (move.board[i][this.x].piece != null) {
          console.log('Engel var');
          deneme = true;
          break;
        }
      }
    } else if (this.x != move.toX) {
      console.log('Else if kontrolüne girildi ');
      for (
        let i: number = this.x;
        this.test2(move.toX) ? i < move.toX : i > move.toX;
        this.test2(move.toX) ? i++ : i--
      ) {
        console.log(i, move.toY, 'i move.toY');
        const deneme23: number = i - move.toY;
        console.log('For döngüsüne girildi' + deneme23);
        console.log(this.test(move.toY), 'test');
        console.log(move.board[this.y][i], 'Deneme 1414');
        if (move.board[this.y][i] == move.board[this.y][this.x]) {
          console.log('Parça eşit');
        } else if (move.board[this.y][i].piece != null) {
          console.log('Engel var');
          deneme = true;
          break;
        }
      }
    }
    return deneme;
  }
}

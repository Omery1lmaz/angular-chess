import { Board } from './Board';
import { Piece } from './Piece';

export class Rook extends Piece {
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
      console.log(this.x, this.y, toX, toY, 'x y tox toy move method');
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
    console.log(toX, toY, 'TOX TOY ');
    // console.log(this.getPossibleMoves(board, start, end, toX, toY));
    if ((toX == this.x && toY != this.y) || (toY == this.y && toX != this.x)) {
      console.log('İf koşul sağlandı');
      if (!this.getPossibleMoves(board, start, end, toX, toY)) {
        console.log('deneme 23');
        if (board[toY][toX].piece?.white != this.white) {
          console.log('deneme 24');
          return true;
        } else return false;
      } else return false;
      // gidilecek yerde parça varsa ve parça aynı renk değilse
    } else return false;
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
  override getPossibleMoves(
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

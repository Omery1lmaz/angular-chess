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

  test(toX: number): boolean {
    if (toX > this.x) {
      return true;
    } else return false;
  }
  override getPossibleMoves(
    board: any,
    start: number,
    end: number,
    toX: number,
    toY: number
  ): boolean {
    let response: boolean = true;
    const absX = toX - this.x;
    const absY = toY - this.y;
    console.log('GetPossibleMoves');
    if (this.white) {
      if (this.test(toX)) {
        console.log('Ters Yön');
        for (let sayac: number = 0; sayac < absX; sayac++) {
          console.log(board[toY][toX], 'console.log bir ');
          toY++;
          toX++;
          if (board[toY][toX].piece != null) {
            console.log('if dolu');
            if (board[toY][toX].piece == board[this.y][this.x].piece) {
              console.log(board[toY][toX].piece, 'if dolu');
              return true;
            }
            console.log(board[toY][toX], 'if dolu');
            return (response = false);
          }
        }
        for (let sayac: number = 0; sayac < Math.abs(absY); sayac++) {
          console.log(board[toY][toX], 'console.log ters yönde istikamet');
          if (board[toY][toX].piece) {
            console.log('if dolu');
            if (board[toY][toX].piece == board[this.y][this.x].piece) {
              console.log(board[toY][toX].piece, 'if dolu');
              return true;
            }
            console.log(board[toY][toX], 'if dolu');
            return (response = false);
          }
          toY--;
          toX--;
        }
      } else {
        console.log('Ters Yön 1');
        for (let sayac: number = 0; sayac < absX; sayac++) {
          console.log(board[toY][toX], 'console.log');
          toY++;
          toX--;
          if (board[toY][toX].piece) {
            console.log('if dolu');
            if (board[toY][toX].piece == board[this.y][this.x].piece) {
              console.log(board[toY][toX].piece, 'if dolu');
              return true;
            }
            console.log(board[toY][toX], 'if dolu');
            return (response = false);
          }
        }
        for (let sayac: number = 0; sayac < Math.abs(absY); sayac++) {
          console.log(board[toY][toX], 'console.log ters yönde istikamet');
          if (board[toY][toX].piece) {
            console.log('if dolu');
            if (board[toY][toX].piece == board[this.y][this.x].piece) {
              console.log(board[toY][toX].piece, 'if dolu');
              return true;
            }
            console.log(board[toY][toX], 'if dolu');
            return (response = false);
          }
          toY++;
          toX++;
        }
      }
    } else {
      for (let sayac: number = 0; sayac < absX; sayac++) {
        console.log(board[toY][toX], 'console.log doğru yön');
        toY--;
        toX--;
        if (board[toY][toX].piece) {
          console.log('if dolu');
          if (board[toY][toX].piece == board[this.y][this.x].piece) {
            console.log(board[toY][toX].piece, 'if dolu');
            return true;
          }
          console.log(board[toY][toX], 'if dolu');
          return (response = false);
        }
      }
      for (let sayac: number = 0; sayac < Math.abs(absY); sayac++) {
        console.log(board[toY][toX], 'console.log ters yönde istikamet');
        if (board[toY][toX].piece) {
          console.log('if dolu');
          if (board[toY][toX].piece == board[this.y][this.x].piece) {
            console.log(board[toY][toX].piece, 'if dolu');
            return true;
          }
          console.log(board[toY][toX], 'if dolu');
          return (response = false);
        }
        toY--;
        toX++;
      }
    }
    return response;
  }
}

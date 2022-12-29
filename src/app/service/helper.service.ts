import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public helper(board: any, toY: number, toX: number, x: number, y: number) {
    if (y > toY) {
      if (x > toX) {
        return this.method(board, toY, toX, x, y, true, true, true);
      } else {
        // büyüktür

        return this.method(board, toY, toX, x, y, true, true, false);
      }
    } else {
      if (x > toX) {
        return this.method(board, toY, toX, x, y, false, false, true);

      } else {
        return this.method(board, toY, toX, x, y, false, false, false);
      }
    }
  }
  yAxisContol(toY: number, y: number): any {
    if (y > toY) {
      return false;
    }
    return true;
  }
  xAxisControl(toX: number, x: number) {
    if (x > toX) {
      return false;
    }
    return true;
  }

  ForwardWalk(board: any, toX: number, toY: number, x: number, y: number) {
    let deneme: boolean = false;
    if (y != toY) {
      for (
        let i: number = y;
        this.yAxisContol(toY, y) ? i < toY : i > toY;
        this.yAxisContol(toY, y) ? i++ : i--
      ) {
        if (board[i][x] == board[y][x]) {
        } else if (board[i][x].piece != null) {
          deneme = true;
          break;
        }
      }
      return deneme;
    } else {
      for (
        let i: number = x;
        this.xAxisControl(toX, x) ? i < toX : i > toX;
        this.xAxisControl(toX, x) ? i++ : i--
      ) {
        if (board[y][i] == board[y][x]) {
        } else if (board[y][i].piece != null) {
          deneme = true;
          break;
        }
      }
      return deneme
    }
  }
  method(board: any, toY: number, toX: number, x: number, y: number, test: boolean, toyControl: boolean, toxControl: boolean) {
    const lastX: number = toX;
    const lastY: number = toY;
    let deneme: boolean = true;
    for (let sayac: number = 0; test ? y > toY : y < toY; sayac++) {
      toyControl ? toY = toY + 1 : toY = toY - 1;
      toxControl ? toX = toX + 1 : toX = toX - 1;
      if (board[toY][toX].piece != null) {
        if (board[toY][toX].piece == board[y][x].piece) {
          return true
        } else if (board[toY][toX] == board[lastY][lastX]) {
          break
        } else {
          return (deneme = false);
        }
      } deneme = false;
    } return deneme
  }
}

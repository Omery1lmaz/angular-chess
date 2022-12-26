import { Board } from './Board';
import { Piece } from './Piece';

export class Pawn extends Piece {
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
      board[this.y][this.x].piece.ismoved = true;
      board[toY][toX].piece = board[this.y][this.x].piece;
      board[this.y][this.x].piece = null;
      this.x = toX;
      this.y = toY;
      return true;
    } else {
      console.log('Move metodu calismadi');
      return false;
    }
  }
  // (this.ismoved && (toY = (this.y + 1))) && (!this.ismoved && (toY = (this.y + 1 || this.y + 2))) && this.isAvailable(toX, toY)
  override canMove(
    board: any,
    start: number,
    end: number,
    toX: number,
    toY: number
  ) {
    console.log('deneme');
    // Piyon hareket etmemişse, gideceği yer doğruysa ve hareket edeceği yer boşsa veya doluysa
    console.log(this.ismoved, 'isMoved');
    console.log(toX, toY, 'toX toY');
    console.log(this.x, this.y, 'this.x this.y');
    console.log(board[toY][toX], 'Gidilecek yerdeki taş');
    if (this.getPossibleMoves(board, this.x, this.y, toX, toY)) {
      if (this.white) {
        console.log('White');
        if (
          !this.ismoved &&
          (toY == this.y - 2 || toY == this.y - 1) &&
          this.x == toX
        ) {
          console.log(board[toY][toX].piece, 'deneme 3 öncesi board null mi?');
          if (board[toY][toX].piece == null) {
            return true;
          } else {
            return false;
          }
        }
        // Piyon bir ileri gitmişse
        else if (toY == this.y - 1) {
          console.log('bir');
          console.log('this.x');
          console.log(
            board[toX][toY].piece,
            'iki girmeden önce ',
            toY,
            this.x,
            'tox this.x'
          );
          // Gidilecek yer boşsa ve x değeri doğruysa
          if (board[toY][toX].piece == null && toX == this.x) {
            console.log('iki');
            return true;
          }
          // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
          else if (
            board[toY][toX].piece !== null &&
            (this.x == toX - 1 || this.x == toX + 1) &&
            board[toY][toX].piece?.white != this.white
          ) {
            console.log('üç');
            return true;
          } else {
            return false;
          }
        } else {
          console.log('to y ve this.y', toY == this.y - 1);
          console.log('beş');
          console.log('start');
          return false;
        }
      } else if (!this.white) {
        console.log('Black');
        if (
          !this.ismoved &&
          (toY == this.y + 2 || toY == this.y + 1) &&
          this.x == toX
        ) {
          console.log(board[toY][toX].piece, 'deneme 3 öncesi board null mi?');
          if (board[toY][toX].piece == null) {
            return true;
          } else {
            return false;
          }
        }
        // Piyon bir ileri gitmişse
        else if (toY == this.y + 1) {
          console.log('bir');
          console.log('this.x');
          console.log(
            board[toX][toY].piece,
            'iki girmeden önce ',
            toY,
            this.x,
            'tox this.x'
          );
          // Gidilecek yer boşsa ve x değeri doğruysa
          if (board[toY][toX].piece == null && toX == this.x) {
            console.log('iki');
            return true;
          }
          // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
          else if (
            board[toY][toX].piece !== null &&
            (this.x == toX - 1 || this.x == toX + 1) &&
            board[toY][toX].piece?.white != this.white
          ) {
            console.log('üç');
            return true;
          } else {
            return false;
          }
        } else {
          console.log('to y ve this.y', toY == this.y + 1);
          console.log('beş');
          console.log('start');
          return false;
        }
      } else {
        return false;
      }
    } else return false;
  }
  override getPossibleMoves(
    board: any,
    start: number,
    end: number,
    toX: number,
    toY: number
  ): boolean {
    if (this.white) {
      if (toY == this.y - 2 && board[toY + 1][this.x].piece) {
        console.log(board[toY - 1][this.x].piece, ' Piyon if koşulu');
        return false;
      } else return true;
    } else {
      if (toY == this.y + 2 && board[toY - 1][this.x].piece) {
        console.log(board[toY - 1][this.x].piece, ' Piyon if koşulu');
        return false;
      } else return true;
    }
  }
}

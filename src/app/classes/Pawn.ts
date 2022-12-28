import { Move } from '../interfaces/move';
import { Board } from './Board';
import { Piece } from './Piece';

export class Pawn extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
  }
  override move(
    move: {
      board: any,
      toX: number,
      toY: number
    }
  ) {
    console.log(move.toX, "Move parametreleri")
    if (this.canMove(move)) {
      return this.PutPiece(move)
    } else {
      console.log('Move metodu calismadi');
      return false;
    }
  }
  // (this.ismoved && (toY = (this.y + 1))) && (!this.ismoved && (toY = (this.y + 1 || this.y + 2))) && this.isAvailable(toX, toY)
  override canMove(
    move: Move
  ) {
    console.log('deneme');
    // Piyon hareket etmemişse, gideceği yer doğruysa ve hareket edeceği yer boşsa veya doluysa
    // console.log(this.ismoved, 'isMoved');
    // console.log(toX, toY, 'toX toY');
    // console.log(this.x, this.y, 'this.x this.y');
    // console.log(board[toY][toX], 'Gidilecek yerdeki taş');
    if (this.getPossibleMoves(move)) {
      if (this.white) {
        console.log('White');
        if (
          !this.ismoved &&
          (move.toY == this.y - 2 || move.toY == this.y - 1) &&
          this.x == move.toX
        ) {
          console.log(move.board[move.toY][move.toX].piece, 'deneme 3 öncesi board null mi?');
          if (move.board[move.toY][move.toX].piece == null) {
            return true;
          } else {
            return false;
          }
        }
        // Piyon bir ileri gitmişse
        else if (move.toY == this.y - 1) {
          console.log('bir');
          console.log('this.x');
          console.log(
            move.board[move.toX][move.toY].piece,
            'iki girmeden önce ',
            move.toY,
            this.x,
            'tox this.x'
          );
          // Gidilecek yer boşsa ve x değeri doğruysa
          if (move.board[move.toY][move.toX].piece == null && move.toX == this.x) {
            console.log('iki');
            return true;
          }
          // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
          else if (
            move.board[move.toY][move.toX].piece !== null &&
            (this.x == move.toX - 1 || this.x == move.toX + 1) &&
            move.board[move.toY][move.toX].piece?.white != this.white
          ) {
            console.log('üç');
            return true;
          } else {
            return false;
          }
        } else {
          console.log('to y ve this.y', move.toY == this.y - 1);
          console.log('beş');
          console.log('start');
          return false;
        }
      } else if (!this.white) {
        console.log('Black');
        if (
          !this.ismoved &&
          (move.toY == this.y + 2 || move.toY == this.y + 1) &&
          this.x == move.toX
        ) {
          console.log(move.board[move.toY][move.toX].piece, 'deneme 3 öncesi board null mi?');
          if (move.board[move.toY][move.toX].piece == null) {
            return true;
          } else {
            return false;
          }
        }
        // Piyon bir ileri gitmişse
        else if (move.toY == this.y + 1) {
          console.log('bir');
          console.log('this.x');
          console.log(
            move.board[move.toX][move.toY].piece,
            'iki girmeden önce ',
            move.toY,
            this.x,
            'tox this.x'
          );
          // Gidilecek yer boşsa ve x değeri doğruysa
          if (move.board[move.toY][move.toX].piece == null && move.toX == this.x) {
            console.log('iki');
            return true;
          }
          // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
          else if (
            move.board[move.toY][move.toX].piece !== null &&
            (this.x == move.toX - 1 || this.x == move.toX + 1) &&
            move.board[move.toY][move.toX].piece?.white != this.white
          ) {
            console.log('üç');
            return true;
          } else {
            return false;
          }
        } else {
          console.log('to y ve this.y', move.toY == this.y + 1);
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
    move: Move
  ): boolean {
    if (this.white) {
      if (move.toY == this.y - 2 && move.board[move.toY + 1][this.x].piece) {
        console.log(move.board[move.toY - 1][this.x].piece, ' Piyon if koşulu');
        return false;
      } else return true;
    } else {
      if (move.toY == this.y + 2 && move.board[move.toY - 1][this.x].piece) {
        console.log(move.board[move.toY - 1][this.x].piece, ' Piyon if koşulu');
        return false;
      } else return true;
    }
  }
}

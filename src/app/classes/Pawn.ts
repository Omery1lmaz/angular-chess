import { Piece } from "./Piece";

export class Pawn extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y)
  }
  override move(board: any, start: number, end: number, toX: number, toY: number) {
    console.log("start end", start, end);
    if (this.canMove(board, start, end, toX, toY)) {
      board[toX][toY].piece = board[start][end].piece;
      board[start][end] = null;
      console.log(board[toX][toY], "Console move class")
      return true;
    } else {
      console.log('Move metodu calismadi')
      return false;
    }
  }
  // (this.ismoved && (toY = (this.y + 1))) && (!this.ismoved && (toY = (this.y + 1 || this.y + 2))) && this.isAvailable(toX, toY)
  override canMove(board: any, start: number, end: number, toX: number, toY: number) {
    // if (!this.white) {
    //   console.log("deneme")
    //   // Piyon hareket etmemişse, gideceği yer doğruysa ve hareket edeceği yer boşsa veya doluysa
    //   console.log(this.ismoved, 'isMoved')
    //   console.log(toX, toY, 'toX toY')
    //   console.log(this.x, this.y, 'this.x this.y')
    //   console.log(board[toX][toY], 'Gidilecek yerdeki Kare')
    //   if (!this.ismoved && (toX == this.y + 2 || this.y + 1) && (this.x == toX)) {
    //     console.log("deneme 2")
    //     if (board[toX][toY] == null) {
    //       return true;
    //     } else {
    //       console.log("deneme 3")
    //       return false;
    //     }
    //   }
    //   // Piyon bir ileri gitmişse
    //   else if ((toY == this.y + 1)) {
    //     // Gidilecek yer boşsa ve x değeri doğruysa
    //     console.log("bir")
    //     if (board[toX][toY] == null && toX == this.x) {
    //       console.log("iki")
    //       return true;
    //     }
    //     // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
    //     else if (board[toX][toY] !== null && this.x == (toX + 1 || toX - 1) && board[toX][toY]?.white != this.white) {
    //       console.log("üç")
    //       return true;
    //     }
    //     else {
    //       console.log("dört")
    //       return false;
    //     }
    //   } else {
    //     console.log("beş")
    //     return false;
    //   }
    console.log("deneme")
    // Piyon hareket etmemişse, gideceği yer doğruysa ve hareket edeceği yer boşsa veya doluysa
    console.log(this.ismoved, 'isMoved')
    console.log(toX, toY, 'toX toY')
    console.log(this.x, this.y, 'this.x this.y')
    console.log(board[toX][toY].piece, 'Gidilecek yerdeki taş')
    if (!this.ismoved && (toX == this.y + 2 || this.y - 1) && (this.x == toX)) {
      console.log("deneme 2")
      if (board[toX][toY].piece == null) {
        return true;
      } else {
        console.log("deneme 3")
        return false;
      }
    }
    // Piyon bir ileri gitmişse
    else if ((toY == this.y - 1)) {
      // Gidilecek yer boşsa ve x değeri doğruysa
      console.log("bir")
      if (board[toX][toY].piece == null && toX == this.x) {
        console.log("iki")
        return true;
      }
      // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
      else if (board[toX][toY].piece !== null && this.x == (toX - 1 || toX + 1) && board[toX][toY].piece?.white != this.white) {
        console.log("üç")
        return true;
      }
      else {
        console.log("dört")
        return false;
      }
    } else {
      console.log("beş")
      return false;
    }

    // else if (this.ismoved && board[toX][toY]?.white == this.white) {

    // }
    // else if (this.ismoved && (toX == this.x + 1) && (this.y == toY)) {

    // }
  }/*
    // Karşı takımdaki elemanı yeme
    if (board[toX][toY] != null && board[toX][toY].white != this.white && this.x == toX + 1) {

    }*/
  // if (this.white != board[toX][toY]?.piece?.white) {
  //   return true;
  //   console.log('White')
  //   if (!this.ismoved && this.x != toX - 1 && (this.x == (toX - 1 || toX + 1) && this.y == toY - 1)) {
  //     return true;
  //   } else if (!this.isAvailable(toX, toY) && (toY >= 0 && toY <= 7) || ((toY == this.y) && (toX >= 0 && toX <= 7))) {
  //     return true
  //   } else {
  //     return false
  //   }
}

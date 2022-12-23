import { Piece } from "./Piece";

export class Pawn extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y)
  }
  override move(board: any, start: number, end: number, toY: number, toX: number) {
    if (this.canMove(board, start, end, toY, toX)) {
      board[end][start].piece.ismoved = true;
      board[toX][toY].piece = board[end][start].piece;
      board[end][start] = null;
      board[toX][toY].piece.x = toY;
      board[toX][toY].piece.y = toX;
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
    console.log(board[toY][toX], 'Gidilecek yerdeki taş')
    if (this.white) {
      console.log("White")
      if (!this.ismoved && (toY == this.y - 2 || toY == this.y - 1) && (this.x == toX)) {
        console.log(board[toY][toX].piece, "deneme 3 öncesi board null mi?")
        if (board[toY][toX].piece == null) {
          return true;
        } else {
          return false;
        }
      }
      // Piyon bir ileri gitmişse
      else if (toY == this.y - 1) {
        console.log("bir")
        console.log("this.x")
        console.log(board[toX][toY].piece, "iki girmeden önce ", toY, this.x, "tox this.x")
        // Gidilecek yer boşsa ve x değeri doğruysa
        if (board[toY][toX].piece == null && toX == this.x) {
          console.log("iki")
          return true;
        }
        // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
        else if (board[toY][toX].piece !== null && ((this.x == toX - 1) || (this.x == toX + 1)) && board[toY][toX].piece?.white != this.white) {
          console.log("üç")
          return true;
        } else {
          return false;
        }
      } else {
       console.log("to y ve this.y", toY == this.y - 1)
        console.log("beş")
        console.log("start",)
        return false;
      }
    } else if (!this.white) {
      console.log("Black")
      if (!this.ismoved && (toY == this.y + 2 || toY == this.y + 1) && (this.x == toX)) {
        console.log(board[toY][toX].piece, "deneme 3 öncesi board null mi?")
        if (board[toY][toX].piece == null) {
          return true;
        } else {
          return false;
        }
      }
      // Piyon bir ileri gitmişse
      else if (toY == this.y + 1) {
        console.log("bir")
        console.log("this.x")
        console.log(board[toX][toY].piece, "iki girmeden önce ", toY, this.x, "tox this.x")
        // Gidilecek yer boşsa ve x değeri doğruysa
        if (board[toY][toX].piece == null && toX == this.x) {
          console.log("iki")
          return true;
        }
        // Gidilecek yer doluysa, gidilecek yerdeki taş aynı renk değilse ve x değeri doğruysa
        else if (board[toY][toX].piece !== null && ((this.x == toX - 1) || (this.x == toX + 1)) && board[toY][toX].piece?.white != this.white) {
          console.log("üç")
          return true;
        } else {
          return false;
        }
      } else {
        console.log("to y ve this.y", toY == this.y + 1)
        console.log("beş")
        console.log("start",)
        return false;
      }
    } else {
      return false
    }
  }
  /*
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

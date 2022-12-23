import { getSafePropertyAccessString } from "@angular/compiler";
import { Board } from "./Board";
import { Piece } from "./Piece";

export class Rook extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y)
  }
  override move(board: any, start: number, end: number, toX: number, toY: number) {
    if (this.canMove(board, start, end, toX, toY)) {
      console.log(this.x, this.y, toX, toY, 'x y tox toy move method');
      board[toY][toX].piece = board[this.y][this.x].piece
      board[this.y][this.x].piece = null
      this.x = toX;
      this.y = toY;
      return true;
    } else {
      return false;
    }
  }
  override canMove(board: any, start: number, end: number, toX: number, toY: number) {
    console.log(toX, toY, 'TOX TOY ');;
    // console.log(this.getPossibleMoves(board, start, end, toX, toY));
    if ((((toX == this.x) && (toY != this.y)) || ((toY == this.y) && (toX != this.x)))) {
      console.log('İf koşul sağlandı');
      if (!this.getPossibleMoves(board, start, end, toX, toY)) {
        console.log("deneme 23")
        if (board[toY][toX].piece?.white != this.white) {
          console.log("deneme 24");
          return true
        } else return false;
      } else return false;
      // gidilecek yerde parça varsa ve parça aynı renk değilse
      console.log("Board Boş değil")
    } else return false;
  }

  test(toY: number): any {
    if (this.y > toY) {
      return false
    } else if (this.y < toY) {
      return true
    }
  }
  override getPossibleMoves(board: any, start: number, end: number, toX: number, toY: number): any {
    let deneme: boolean = false;

    const x = this.test(toY)
    if (this.y != toY) {

      for (let i: number = this.y; i < toY; i++) {
        console.log(i, toY, "i toY");
        const deneme23: number = i - toY;
        console.log("For döngüsüne girildi" + deneme23);
        console.log(this.test(toY), "test")
        console.log(board[5][this.x], "board for döngüsü");
      }
    }


    console.log("Get Possible moves",);
    let i;
    let j: number;
    // console.log(this.x > toX, "x toX den büyüktür")
    // console.log(toX > this.x, "x toX den büyüktür")
    // console.log(this.x != toX, "y ekseni eşitse x ekseni farklıysa")
    // console.log(this.y != toY, "x ekseni eşitse y ekseni farklıysa")

    // if (this.x != toX) {
    //   j = toX
    //   i = this.x
    //   console.log("toX x yönğnde if koşulu sağladı ", toX);
    //   // for (i > j ? i > j : i < j; i > j ? i-- : i++;) {
    //   //   console.log(i, j, "for döngüsü x ekseni i j");
    //   //   console.log(board[this.y][i].piece, "for döngüsü x ekseni i j");
    //   //   if (i > j ? i > j : i < j) {
    //   //     if (board[this.y][i].piece != null) {
    //   //       console.log('Engel var', board[this.y][this.x].piece)
    //   //       deneme = true;
    //   //       break;
    //   //     }
    //   //   }
    //   // }
    //   for (let i = this.x - 1; i > toX; i--) {
    //     console.log("Block statement execution no." + i);
    //     if (board[this.y][i].piece != null) {
    //       console.log('Engel var', board[i][this.x].piece)
    //       deneme = true;
    //       break;
    //     }
    //   }
    //   return deneme
    // }
    // else if (this.y != toY) {
    //   for (let i = this.y - 1; i > toY; i--) {
    //     console.log("Block statement execution no." + i);
    //     if (board[i][this.x].piece != null) {
    //       console.log('Engel var', board[i][this.x].piece)
    //       deneme = true;
    //       break;
    //     }
    //   }

    // for (i > j; i--;) {
    //   console.log(i, j, "i ve j");
    //   // if (i > j) {

    //   }
    // }
    //   return deneme;
    // }
    // return false;



  }
  // for (let i = this.x; i <= toX; i++) {
  //   if (board[i][toX].piece == null) { return true } else { return false }
  // }
}

// // Her bir satranç parçasının ortak özelliklerini tutar
// export abstract class Piece {
//   name!: string;
//   white: boolean = false;
//   ismoved = false;
//   x!: number;
//   y!: number;
//   constructor(white: boolean, name: string,) {
//     this.name = name;
//     this.white = white;
//   }
//   move(board: Board, start: number, end: number, toX: number, toY: number) { }
//   canMove(board: Board, start: number, end: number, toX: number, toY: number) { }
//   isAvailable(toX: number, toY: number) {
//     if (toX == this.x && toY == this.y) { return false; }
//     return true;
//   }
// }


// // Satranç tahtasındaki her bir kareyi temsil eder
// export class Spot {
//   piece: Piece | null;
//   x: number;
//   y: number;
//   constructor(piece: Piece | null, x: number, y: number) {
//     this.piece = piece;
//     this.x = x;
//     this.y = y;
//   }
// }
// // Satranç tahtası
// export class Board {
//   boxes: any = Array(8).fill(0).map((x) => Array(8).fill(0));
//   deneme!:any;
//   constructor() {
//     console.log("Board constructor");
//     console.log(this.boxes);
//     this.board();
//   }
//   board() {
//     this.boxes[0][0] = new Spot(new Rook(true, 'Kale'), 0, 0,);
//     this.boxes[0][1] = new Spot(new Knight(true, 'At'), 0, 1,);
//     this.boxes[0][2] = new Spot(new Bishop(true, 'Fil'), 0, 2,);
//     this.boxes[0][3] = new Spot(new King(true, 'Kral'), 0, 3);
//     this.boxes[0][4] = new Spot(new Queen(true, 'Vezir'), 0, 4);
//     this.boxes[0][5] = new Spot(new Bishop(true, 'Fil'), 0, 5);
//     this.boxes[0][6] = new Spot(new Knight(true, 'At'), 0, 6);
//     this.boxes[0][7] = new Spot(new Rook(true, 'Kale'), 0, 7);
//     for (let i = 0; i < 8; i++) {
//       this.boxes[1][i] = new Spot(new Pawn(true, 'Piyon'), 1, i);
//     }
//     //  black pieces
//     this.boxes[7][0] = new Spot(new Rook(false, 'Kale'), 7, 0,);
//     this.boxes[7][1] = new Spot(new Knight(false, 'At'), 7, 1,);
//     this.boxes[7][2] = new Spot(new Bishop(false, 'Fil'), 7, 2,);
//     this.boxes[7][3] = new Spot(new King(false, 'Kral'), 7, 3);
//     this.boxes[7][4] = new Spot(new Queen(false, 'Vezir'), 7, 4);
//     this.boxes[7][5] = new Spot(new Bishop(false, 'Fil'), 7, 5);
//     this.boxes[7][6] = new Spot(new Knight(false, 'At'), 7, 6);
//     this.boxes[7][7] = new Spot(new Rook(false, 'Kale'), 7, 7);
//     console.log()
//     for (let i = 0; i < 8; i++) {
//       this.boxes[6][i] = new Spot(new Pawn(false, 'Piyon'), 6, i);
//     }
//     // boş hücreleri null olarak atar
//     for (let i = 2; i < 6; i++) {
//       for (let j = 0; j < 8; j++) {
//         this.boxes[i][j] = new Spot(null, i, j);
//       }
//     }
//   }
//   getBoxes() {
//     console.log('Get boxes');
//     return this.boxes
//   }
// }

// class King extends Piece {
//   constructor(white: boolean, name: string) {
//     super(white, name);
//   }

//   override move(board: any, start: number, end: number, toX: number, toY: number) {
//     if (this.canMove(board, start, end, toX, toY)) {
//       this.x = toX;
//       this.y = toY;
//       board[toX][toY].piece = board[this.x][this.y].piece
//       board[this.x][this.y].piece = null
//       return true;
//     } else { return false; }
//   }
//   override canMove(board: any, start: number, end: number, toX: number, toY: number) {
//     console.log(toX, toY, 'TOX TOY ', 'boardboxes', board[toX][toY]);;
//     if (this.white == !board[toX][toY].piece?.white) {
//       if (toX == (this.x + 1 || this.x - 1) || toX == (this.y + 1 || this.y - 1)) { return true }
//     }
//     if (toX != (start - 1 || start + 1) && toY != (end - 1 || end + 1) && this.isAvailable(toX, toY)) {
//       return false;
//     } else { return false }
//   }
// }



// class Rook extends Piece {
//   constructor(white: boolean, name: string) {
//     super(white, name)
//   }
//   override move(board: any, start: number, end: number, toX: number, toY: number) {
//     if (this.canMove(board, start, end, toX, toY)) {
//       this.x = toX;
//       this.y = toY;
//       board[toX][toY].piece = board[this.x][this.y].piece
//       board[this.x][this.y].piece = null
//       return true;
//     } else {
//       return false;
//     }
//   }
//   override canMove(board: any, start: number, end: number, toX: number, toY: number) {
//     console.log('Board', board)
//     console.log(toX, toY, 'TOX TOY ', 'boardboxes', board[4][5]);;
//     if (this.white == !board[toX][toY]?.piece?.white) {
//       if (toX != start - 1 && toY != end - 1 && this.isAvailable(toX, toY)) {
//         return false;
//       }
//     }
//     if ((toX == this.x) && (toY >= 0 && toY <= 7) || ((toY == this.y) && (toX >= 0 && toX <= 7))) {
//       return true
//     } else { return false }
//   }
// }
// class Knight extends Piece {
//   constructor(white: boolean, name: string) {
//     super(white, name)
//   }
//   override move(board: any, start: number, end: number, toX: number, toY: number) {
//     if (this.canMove(board, start, end, toX, toY)) {
//       this.x = toX;
//       this.y = toY;
//       board[toX][toY].piece = board[this.x][this.y].piece
//       board[this.x][this.y].piece = null
//       return true;
//     } else {
//       return false;
//     }
//   }
//   override canMove(board: any, start: number, end: number, toX: number, toY: number) {
//     console.log(toX, toY, 'TOX TOY ', 'boardboxes', board[toX][toY]);;
//     if ((toX != (start + 3 || start - 3) && toY != (end - 1 || end + 1)) || (toY != (end + 3 || end - 3) && toX != (start - 1 || start + 1)) && this.isAvailable(toX, toY)) {
//       return false;
//     }
//     if (this.white == !board[toX][toY]?.piece?.white) {
//       if ((toX == this.x) && (toY >= 0 && toY <= 7) || ((toY == this.y) && (toX >= 0 && toX <= 7))) {
//         return true
//       } else { return false }
//     } else { return false }
//   }
// }
// class Bishop extends Piece {
//   constructor(white: boolean, name: string) {
//     super(white, name)
//   }

//   override move(board: any, start: number, end: number, toX: number, toY: number) {
//     if (this.canMove(board, start, end, toX, toY)) {
//       this.x = toX;
//       this.y = toY;
//       board[toX][toY].piece = board[this.x][this.y].piece
//       board[this.x][this.y].piece = null
//       return true;
//     } else {
//       return false;
//     }
//   }
//   override canMove(board: any, start: number, end: number, toX: number, toY: number) {
//     console.log(toX, toY, 'TOX TOY ', 'boardboxes', board[toX][toY]);;
//     if (toX == start && (toY == end) && this.isAvailable(toX, toY)) {
//       return false;
//     }
//     if (this.white == !board[toX][toY]?.piece?.white) {
//       if ((toX == this.x) && (toY >= 0 && toY <= 7) || ((toY == this.y) && (toX >= 0 && toX <= 7))) {
//         return true
//       } else { return false }
//     } else { return false }
//   }
// }
// class Pawn extends Piece {
//   constructor(white: boolean, name: string) {
//     super(white, name)
//   }
//   override move(board: any, start: number, end: number, toX: number, toY: number) {
//     console.log("start end", start, end);
//     if (this.canMove(board, start, end, toX, toY)) {
//       console.log("start end", start, end);
//       console.log(start, end, "this.x this.y")
//       this.x = start;
//       this.y = end;
//       console.log("Tox Toy", toX, toY)
//       console.log(board[this.x][this.y].piece, "board piece")
//       board[toX][toY].piece = board[this.x][this.y].piece
//       board[this.x][this.y].piece = null
//       this.x = toX;
//       this.y = toY;
//       console.log(board[this.x][this.y].piece, "board piece after")
//       console.log(board[toX][toY].piece, "board piece ToY")

//       return true;
//     } else {
//       console.log('Move metodu calismadi')
//       return false;
//     }
//   }
//   // (this.ismoved && (toY = (this.y + 1))) && (!this.ismoved && (toY = (this.y + 1 || this.y + 2))) && this.isAvailable(toX, toY)
//   override canMove(board: any, start: number, end: number, toX: number, toY: number) {
//     // if (this.white != board[toX][toY]?.piece?.white) {
//     //   return true;
//     // console.log('White')
//     // if (!this.ismoved && this.x != toX - 1) {
//     //   console.log('White 1')
//     //   return true;
//     // } else if (!this.isAvailable(toX, toY) && (toY >= 0 && toY <= 7) || ((toY == this.y) && (toX >= 0 && toX <= 7))) {
//     //   console.log('White 2')
//     //   return true
//     // } else {
//     //   console.log('move metodu çalışmadı 2');
//     //   return false
//     // }
//     return true

//   }
// }
// class Queen extends Piece {
//   constructor(white: boolean, name: string) {
//     super(white, name)
//   }
//   override move(board: any, start: number, end: number, toX: number, toY: number) {
//     if (this.canMove(board, start, end, toX, toY)) {
//       this.x = toX;
//       this.y = toY;
//       board[toX][toY].piece = board[this.x][this.y].piece
//       board[this.x][this.y].piece = null
//       return true;
//     } else {
//       return false;
//     }
//   }
//   override canMove(board: any, start: number, end: number, toX: number, toY: number) {
//     console.log(toX, toY, 'TOX TOY ', 'boardboxes', board[toX][toY]);;
//     if (this.white == !board[toX][toY]?.piece?.white) { // eğer renkler farklıysa
//       if ((((toX != this.x) && (toY != this.y)) || ((toX == this.x) || (toY != this.y))) || ((toX != this.x) || (toY == this.y)) || !this.isAvailable(toX, toY)) {
//         return true;
//       } else { return false }
//     } else {
//       return false
//     }
//   }
// }
// // kendi takımınandaki parçayı yememe
// // if (this.white == board[toX][toY].piece?.white)

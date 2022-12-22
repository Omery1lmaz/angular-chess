// abstract class Piece {
//   private killed: boolean = false;
//   private white: boolean = false;
//   constructor(white: boolean) {
//     this.white = white;
//   }
//   public isWhite(): boolean {
//     return this.white;
//   }
//   public setWhite(white: boolean): void {
//     this.white = white;
//   }
//   public isKilled(): boolean {
//     return this.killed;
//   }

//   public setKilled(killed: boolean): void {
//     this.killed = killed;
//   }

//   public abstract canMove(board: any, start: any, end: any): boolean;
// }

// class King extends Piece {
//   public canMove(board: any, start: any, end: any): boolean {
//     if (start.x === end.x && start.y === end.y) {
//       return false;
//     }
//     return true;
//   }

//   constructor(white: boolean) {
//     super(white);
//   }


// }

// class Queen extends Piece {
//   public canMove(board: any, start: any, end: any): boolean {
//     throw new Error("Method not implemented.");
//   }
//   constructor(white: boolean) {
//     super(white);
//   }
// }
// class Knight extends Piece {
//   public canMove(board: any, start: any, end: any): boolean {
//     throw new Error("Method not implemented.");
//   }
// }

// class Rook extends Piece {
//   public canMove(board: any, start: any, end: any): boolean {
//     throw new Error("Method not implemented.");
//   }
//   constructor(white: boolean) {
//     super(white);
//   }
// }

// class Bishop extends Piece {
//   public canMove(board: any, start: any, end: any): boolean {
//     throw new Error("Method not implemented.");
//   }
//   constructor(white: boolean) {
//     super(white);
//   }
// }

// class Pawn extends Piece {
//   public canMove(board: any, start: any, end: any) {
//     if (end.getPiece()) {
//       return false
//     } return true
//   }
//   constructor(white: boolean) {
//     super(white);
//   }
// }

// class Spot {
//   private piece: Piece;
//   private x: number;
//   private y: number;

//   constructor(x: number, y: number, piece: Piece) {
//     this.piece = piece;
//     this.x = x;
//     this.y = y;
//   }
// }

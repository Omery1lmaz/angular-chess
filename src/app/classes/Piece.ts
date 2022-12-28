import { Move, Move2 } from "../interfaces/move";
import { Board } from "./Board";

export abstract class Piece {
  name!: string;
  white: boolean = false;
  ismoved?= false;
  x!: number;
  y!: number;
  constructor(white: boolean, name: string, y: number, x: number) {
    this.name = name;
    this.white = white;
    this.x = x;
    this.y = y;
  }

  //Parçayı Yerleştirme
  PutPiece(move: Move) {
    move.board[this.y][this.x].piece.ismoved = true;
    move.board[move.toY][move.toX].piece = move.board[this.y][this.x].piece;
    move.board[this.y][this.x].piece = null;
    this.x = move.toX;
    this.y = move.toY;
    return true;
  }
  // board: Board, start: number, end: number, toX: number, toY: number
  move(move: Move) { }
  canMove(move: Move) { }
  getPossibleMoves(move: Move) { }
  isAvailable(move: Move) {
    if (move.toX == this.x && move.toY == this.y && this.white == move.board[move.toY][move.toX].piece.white) { return false; }
    return true;
  }
  // crossWalking(board: any, toX: number, toY: number): any {
  //   let response = false;
  //   const lastX: number = toX;
  //   const lastY: number = toY;
  //   console.log(this.x, "Corss Walking this.x")
  //   console.log(this.y, "Corss Walking this.y")
  //   console.log(this.white, "Corss Walking this.white")
  //   if (this.white) {
  //     console.log('white');
  //     // if (!this.test(toY))
  //     console.log(this.y, toY, 'this.y toY')
  //     if (this.y > toY) {
  //       console.log('y > toy');
  //       if (this.x > toX) {
  //         console.log('x > tox');

  //         for (let sayac: number = 0; this.y > toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY++;
  //           toX++;
  //         }
  //       } else {
  //         console.log('x deneme');
  //         for (let sayac: number = 0; this.y > toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY++;
  //           toX--;
  //         }
  //       }
  //     } else {
  //       console.log('y > toy');
  //       if (this.x > toX) {
  //         console.log('x > tox');

  //         for (let sayac: number = 0; this.y > toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY++;
  //           toX++;
  //         }
  //       } else {
  //         console.log('x deneme');
  //         for (let sayac: number = 0; this.y > toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY++;
  //           toX--;
  //         }
  //       } console.log('y > toy');
  //       if (this.x > toX) {
  //         console.log('x > tox');

  //         for (let sayac: number = 0; this.y < toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY--;
  //           toX++;
  //         }
  //       } else {
  //         console.log('x deneme');
  //         for (let sayac: number = 0; this.y < toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY--;
  //           toX--;
  //         }
  //       }
  //     }
  //   } else {

  //     console.log('white');
  //     // if (!this.test(toY))
  //     console.log(this.y, toY, 'this.y toY')
  //     if (this.y > toY) {
  //       console.log('y > toy');
  //       if (this.x > toX) {
  //         console.log('x > tox');

  //         for (let sayac: number = 0; this.y > toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY++;
  //           toX++;
  //         }
  //       } else {
  //         console.log('x deneme');
  //         for (let sayac: number = 0; this.y > toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY++;
  //           toX--;
  //         }
  //       }
  //     } else {
  //       console.log('y > toy');
  //       if (this.x > toX) {
  //         console.log('x > tox');

  //         for (let sayac: number = 0; this.y > toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY++;
  //           toX++;
  //         }
  //       } else {
  //         console.log('x deneme');
  //         for (let sayac: number = 0; this.y > toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY++;
  //           toX--;
  //         }
  //       } console.log('y > toy');
  //       if (this.x > toX) {
  //         console.log('x > tox');
  //         for (let sayac: number = 0; this.y < toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');

  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piece || board[toY][toX].piece == board[lastY][lastX].piece && board[toY][toX].piece.white != board[lastY][lastX].piece.white) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY--;
  //           toX++;
  //         }
  //       } else {
  //         console.log('x deneme');
  //         for (let sayac: number = 0; this.y < toY; sayac++) {
  //           console.log('Ters Yön 1 for loop');
  //           console.log(board[toY][toX], 'console.log bir');
  //           if (board[toY][toX].piece != null) {
  //             console.log('if dolu');
  //             if (board[toY][toX].piece == board[this.y][this.x].piec) {
  //               console.log(board[toY][toX].piece, 'if dolu');
  //               response = true;
  //             }
  //             console.log(board[toY][toX], 'if dolu');
  //             return (response = false);
  //           }
  //           toY--;
  //           toX--;
  //         }
  //       }
  //     }
  //   }
  // }
  Deneme(
    move: Move
  ): boolean {
    let response: boolean = true;
    const lastX: number = move.toX;
    const lastY: number = move.toY;
    console.log('GetPossibleMoves');
    // this.crossWalking(move.board, move.toX, move.toY)
    if (this.white) {
      console.log('white');
      // if (!this.test(move.toY))
      console.log(this.y, move.toY, 'this.y move.toY')
      if (this.y > move.toY) {
        console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');
          console.log(lastX, lastY,)
          console.log('move.toY-1', move.toY + 1, 'this y', this.y);
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            move.toY++;
            move.toX++;
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            if (move.board[move.toY][move.toX].piece != null) {
              console.log(move.board[move.toY][move.toX], 'if parça dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        }
      } else {
        console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY--;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY--;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        }
      }
    } else {

      console.log('white');
      // if (!this.test(move.toY))
      console.log(this.y, move.toY, 'this.y move.toY')
      if (this.y > move.toY) {
        console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        }
      } else {
        console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');

          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y > move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY++;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } console.log('y > toy');
        if (this.x > move.toX) {
          console.log('x > tox');
          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY--;
            move.toX++;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        } else {
          console.log('x deneme');
          for (let sayac: number = 0; this.y < move.toY; sayac++) {
            console.log('Ters Yön 1 for loop');
            console.log(move.board[move.toY][move.toX], 'console.log bir');
            move.toY--;
            move.toX--;
            if (move.board[move.toY][move.toX].piece != null) {
              console.log('if dolu');
              if (move.board[move.toY][move.toX].piece == move.board[this.y][this.x].piece) {
                console.log(move.board[move.toY][move.toX].piece, 'if dolu');
                return true
              } else if (move.board[move.toY][move.toX] == move.board[lastY][lastX]) {
                console.log('Else if dolu', move.board[move.toY][move.toX], move.board[lastY][lastX]);
                break
              } else {
                console.log(move.board[move.toY][move.toX], 'if dolu');
                return (response = false);
              }
            }

          }
        }
      }
    } return response;
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

  getParams(move: Move) {
    /*
    pice?: any,
  board: any,
  toX: number,
  toY: number */
    const board = move.board;
    const toX = move.toX
    const toY = move.toY;
    const x = this.x
    const y = this.y
    const piece = this
    const toBoard = move.board[toY][toX].piece
    return { board, toX, toY, piece, x, y, toBoard }
  }
  forwardWalking(move: Move): any {
    const { board, toX, toY, piece, x, y, toBoard } = this.getParams(move)
    let deneme: boolean = false;

    // if (y != toY) {
    //   for (let i: number = y;
    //     this.test(toY) ? i > toY : i > toY;
    //     this.test(toY) ? i++ : i--) {
    //     console.log(i, toY, 'i toY');
    //     const deneme23: number = i - toY;
    //     console.log('deneme 233333 ', deneme23)
    //     console.log(board[i][x], 'board for döngüsü');
    //     if (board[i][x] == board[y][x]) {
    //       console.log('Parça Eşit');
    //     } else if (board[i][x].piece != null) {
    //       console.log('Engel var');
    //       deneme = true;
    //       break;
    //     }
    //     return deneme;
    //   }
    //   return deneme;
    // } else if (x != toX) {
    if (y != toY) {
      console.log('if kontrolüne girildi ');
      for (
        let i: number = y;
        this.test(toY) ? i < toY : i > toY;
        this.test(toY) ? i++ : i--
      ) {
        console.log(i, toY, 'i toY');
        const deneme23: number = i - toY;
        console.log('For döngüsüne girildi' + deneme23);
        console.log(this.test(toY), 'test');
        console.log(board[i][x], 'Deneme 1414');
        if (board[i][x] == board[y][x]) {
          console.log('Parça eşit');
        } else if (board[i][x].piece != null) {
          console.log('Engel var');
          deneme = true;
          break;
        }
      }
      return deneme;
    }
    console.log('Else if kontrolüne girildi ');
    for (
      let i: number = x;
      this.test2(toX) ? i < toX : i > toX;
      this.test2(toX) ? i++ : i--
    ) {
      console.log(i, toY, 'i toY');
      const deneme23: number = i - toY;
      console.log('For döngüsüne girildi' + deneme23);
      console.log(this.test(toY), 'test');
      console.log(board[y][i], 'Deneme 1414');
      if (board[y][i] == board[y][x]) {
        console.log('Parça eşit');
      } else if (board[y][i].piece != null) {
        console.log('Engel var');
        deneme = true;
        break;
      }
    }
    return deneme;
  }
}


export interface Move {
  pice?: any,
  board: any,
  toX: number,
  toY: number
}

export interface CheckPiecesAtPositionCross {
  CheckPiecesAtPositionCross(move: Move): boolean
}
export interface CheckPiecesAtPositionForward {
  CheckPiecesAtPositionForward(move: Move): boolean
}

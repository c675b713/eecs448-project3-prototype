class GameBoard {
    constructor(_){
        this.GameBoard = [[],[],[],[],[],[],[],[]];
        this.whiteCapturedPieces = [];
        this.blackCapturedPieces = [];
    }

    movePiece(piece, destination){ //both parameters will be of type piece
        //if neither are true, then the piece is a null piece, so no need to add it
        if(destination.color == 'black'){
            this.whiteCapturedPieces.push(destination);
        }
        else if(destination.color == 'white'){
            this.blackCapturedPieces.push(destination);
        }

        this.GameBoard[destination.row][destination.column] = piece;
        //still need to tell the piece that it changed location;
        this.GameBoard[destination.row][destination.column].row = destination.row;
        this.GameBoard[destination.row][destination.column].column = destination.column;
        
        this.GameBoard[piece.row][piece.column] = nullPiece;//will need to change this syntax probably
    }
}
/*
I am writing this here so I don't forget this tomorrow
The idea behind this class is that the GameBoard is going to be an 8x8 array of pieces
Some of the pieces will be the standard pieces you expect (King, Queen, Rook, etc.) but the majority of the spaces will be a "null" piece
That will represent a blank square, but with the added benefit that we can guarentee that the array only has 1 data type, which is piece

Then the algorithm for moving a piece is very simple: In order to move a piece on square A to square B
1. The piece on square B gets added to an array of captured pieces (unless the piece is a null piece)
2. The piece on square B gets changed to whatever the piece on square A currently is
3. The piece on square A gets changed to a null piece
*/
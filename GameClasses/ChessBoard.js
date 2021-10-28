//import {GamePiece} from '/GameClasses/GamePiece.js'
//That line does nothing since it is actually included in index.html, but I am an idiot and want to specify that it is included here
class GameBoard{
    constructor(_){
        this.GameButtons = [];
        this.GameBoard = [];
        this.establishGameButtons();
        this.setUpPieces();
        this.whiteCapturedPieces = [];
        this.blackCapturedPieces = [];
        this.startTurn('white');
        
    }

    establishGameButtons(){
        //takes the buttons from the index.html and puts them into an 8x8 array
        //The bottom left corner is [0][0], that is why we have to do weird stuff with the bounds of the for loops.
        //SOMEONE NEEDS TO GO TO INDEX.HTML AND FLIP ALL THE COLORS, THEY ARE WRONG
        var tempArray = [];
        for(var i =1; i<=8; i++){
            for(var j=0; j<8;j++){
                tempArray.push(document.getElementById(this.numbersToLetters(j)+i));
                //alert(this.numbersToLetters(j)+i);
                document.getElementById(this.numbersToLetters(j)+i).disabled = true;
            }
            this.GameButtons.push(tempArray);
            tempArray = [];
        }
    }

    setUpPieces(){
        //populates the GameBoard array with the Starting configuration of Pieces
        var tempArray = [];
        //1st rank, white's pieces
        tempArray = [new Rook('white'), new Knight('white'), new Bishop('white'), new Queen('white'), new King('white'), new Bishop('white'), new Knight('white'), new Rook('white')];
        this.GameBoard.push(tempArray);
        //second rank, white's pawns
        tempArray = [new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white')];
        this.GameBoard.push(tempArray);
        
        //null pieces fill the 3-6 ranks
        for(var i = 3; i<=6; i++){//null pieces fill the 3-6 ranks
            tempArray = [new NullPiece(),new NullPiece(),new NullPiece(),new NullPiece(),new NullPiece(),new NullPiece(),new NullPiece(),new NullPiece()];
            this.GameBoard.push(tempArray);
        }

        //seventh rank, black's pawns
        tempArray = [new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black')];
        this.GameBoard.push(tempArray);
        //eighth rank, black's pieces
        tempArray = [new Rook('black'), new Knight('black'), new Bishop('black'), new Queen('black'), new King('black'), new Bishop('black'), new Knight('black'), new Rook('black')];
        this.GameBoard.push(tempArray);
        
        //for the move piece algorithm to work, we need every piece to have a location
        for(var i = 0; i<8; i++){
            for(var j = 0; j<8; j++){
                this.GameBoard[i][j].setLocation(i, j);
            }
        }
    }

    numbersToLetters(number){
        switch(number){
            case 0:
                return 'a';
                break;
            case 1:
                return 'b';
                break;
            case 2:
                return 'c';
                break;
            case 3:
                return 'd';
                break;
            case 4:
                return 'e';
                break;
            case 5:
                return 'f';
                break;   
            case 6:
                return 'g';
                break;
            case 7:
                return 'h';
                break;
            default:
                break;
        }
    }

    enableButton(square){
        square.disabled = false;
    }

    disableButton(square){
        square.disabled = true;
    }

    movePiece(piece, destination){ //both parameters will be of type piece
        //if neither are true, then the piece is a null piece, so no need to add it to the lists of captured pieces
        if(destination.color == 'black'){
            this.whiteCapturedPieces.push(destination);
        }
        else if(destination.color == 'white'){
            this.blackCapturedPieces.push(destination);
        }

        this.GameBoard[destination.row][destination.column] = piece;
        //still need to tell the piece that it changed location;
        this.GameBoard[destination.row][destination.column].setLocation(destination.row, destination.column);
        
        this.GameBoard[piece.row][piece.column] = new NullPiece();//will need to change this syntax probably
        //after every move, instead of just updating those two pieces icon, we are just going to update the whole board
        this.reloadBoard();
    }

    reloadBoard(){
        //This method will take update the icon of every button in GameButtons based on its corresponding entry in GameBoard
        for(var i = 0; i<8; i++){
            for(var j = 0; j<8; j++){
                if(this.GameBoard[i][j].color == 'white' || this.GameBoard[i][j].color == 'black'){
                    this.GameButtons[i][j].innerHTML = "<img src="+this.GameBoard[i][j].getImage() + ">";
                }
            }
        }
    }

    startTurn(color){
        //enable all the buttons of the current color
        for(var i = 0; i<8; i++){
            for(var j = 0; j<8; j++){
                if(this.GameBoard[i][j].color == color){
                    this.enableButton(this.GameButtons[i][j]);
                }
            }
        }
        this.movePiece(this.GameBoard[0][0], this.GameBoard[2][2]);
        //this.startTurn('black');
        /*
        if(color == 'white'){
            startTurn('black');
        }
        else{
            this.startTurn('white');
        }
        */
    }
}
gameboard = new GameBoard();
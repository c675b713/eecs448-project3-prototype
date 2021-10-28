class GamePiece {
    constructor(color){
        this.color = color;//'white' or 'black'
    }
    
    setLocation(row, column){//this is probably unnecessary since we can just set the row and column variables but we will see
        this.row = row;
        this.column = column;
    }
    //Another thing every piece will have is a method to return their image
}

class Pawn extends GamePiece{
    constructor(color){
        super(color);
        this.pieceType = 'pawn';
    }

    getImage(){
        if(this.color == 'white'){
            return './img/pawn_white.svg';
        }
        else{
            return '../img/pawn_black.svg';
        }
    }
}

class Knight extends GamePiece{
    constructor(color){
        super(color);
        this.pieceType = 'knight';
    }

    getImage(){
        if(this.color == 'white'){
            return './img/knight_white.svg';
        }
        else{
            return './img/knight_black.svg';
        }
    }
}

class Rook extends GamePiece{
    constructor(color){
        super(color);
        this.pieceType = 'rook';
    }

    getImage(){
        if(this.color == 'white'){
            return './img/rook_white.svg';
        }
        else{
            return './img/rook_black.svg';
        }
    }
}

class Bishop extends GamePiece{
    constructor(color){
        super(color);
        this.pieceType = 'bishop';
    }

    getImage(){
        if(this.color == 'white'){
            return './img/bishop_white.svg';
        }
        else{
            return './img/bishop_black.svg';
        }
    }
}

class Queen extends GamePiece{
    constructor(color){
        super(color);
        this.pieceType = 'queen';
    }

    getImage(){
        if(this.color == 'white'){
            return './img/queen_white.svg';
        }
        else{
            return './img/queen_black.svg';
        }
    }
}

class King extends GamePiece{
    constructor(color){
        super(color);
        this.pieceType = 'king';
    }

    getImage(){
        if(this.color == 'white'){
            return './img/king_white.svg';
        }
        else{
            return './img/king_black.svg';
        }
    }
}

class NullPiece extends GamePiece{
    constructor(){
        super('null');
        this.pieceType = 'null';
    }

    getImage(){
        return '';//This might change later, we will see what I want this to be
    }
}
//here we can define classes for each of the standard pieces and the null piece
//once we do that we can figure out how to add them to the squares on the board.
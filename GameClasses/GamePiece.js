class GamePiece {
    //Need to figure out how to make this a button that can be enabled/disabled
    constructor(color){
        this.color = color;
    }
    
    setLocation(row, column){//this is probably unnecessary since we can just set the row and column variables but we will see
        this.row = row;
        this.column = column;
    }
}

class Pawn extends GamePiece{
    constructor(color){
        super(color);
    }
}

class Knight extends GamePiece{
    constructor(color){
        super(color);
    }
}

class Rook extends GamePiece{
    constructor(color){
        super(color);
    }
}

class Bishop extends GamePiece{
    constructor(color){
        super(color);
    }
}

class Queen extends GamePiece{
    constructor(color){
        super(color);
    }
}

class King extends GamePiece{
    constructor(color){
        super(color);
    }
}

class NullPiece extends GamePiece{
    constructor(){
        super('null');
    }
}
//here we can define classes for each of the standard pieces and the null piece
//once we do that we can figure out how to add them to the squares on the board.
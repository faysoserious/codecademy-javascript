const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArray) {
        this._oriField = fieldArray[0];

        this._userX = fieldArray[1];
        this._userY = fieldArray[2];

        this._boundaryY = this._oriField.length;
        this._boundaryX = this._oriField[0].length;
        this.currentField = this._oriField;
        this._Hatflag = true;
    }
    

    get oriField() {
        return this._oriField;
    }
    get boundaryX() {
        return this._boundaryX;
    }
    get boundaryY() {
        return this._boundaryY;
    }
    get Hatflag() {
        return this._Hatflag;
    }
    get userX() {
        return this._userX
    }
    get userY() {
        return this._userY
    }

    set Hatflag(condition) {
        this._Hatflag = condition;
    }
    set boundaryX(x) {
        this._boundaryX = x;
    }
    set boundaryY(y) {
        this._boundaryY = y;
    }
    set userX(x) {
        this._userX = x;
    }
    set userY(y) {
        this._userY = y;
    }



    judge(x, y) {
        
        let currentX = this.userX + x;
        let currentY = this.userY + y;
        
        if (currentX >= this.boundaryX || currentX < 0 || currentY >= this.boundaryY || currentY < 0) {
            console.log('sorry you hit the boundry');

        } else {
            //            console.log(`current mark ${this.oriField[currentY][currentX]}`)
            //            console.log(typeof this.oriField[currentY][currentX]);
            //            let currentMark = this.oriField[currentY][currentX];

            switch (this.oriField[currentY][currentX]) {
                case 'O':
                    console.log('oooops, you fall into a hole 00000000');
                    this.Hatflag = false;
                    break;
                case '^':
                    console.log('YEAH, you found your hat^^^');
                    this.Hatflag = false;
                    break;

                default:
                    this.userX = currentX;
                    this.userY = currentY;
                    this.currentField[this.userY][this.userX] = '*';
                    this.Hatflag = true;
                    break;


            }
            /*
                        console.log(`currentX = ${currentX}`);
                        console.log(`currentY = ${currentY}`);
                        console.log(`after judge userY = ${this.userY}`);
                        console.log(`after judge userX = ${this.userX}`);
            */





        }



    }

    move(direction) {
        switch (direction) {
            case 'u':
                //                console.log(`you entered ${direction}`);
                this.judge(0, -1);
                break;
            case 'd':
                this.judge(0, 1);
                //console.log(`you entered ${direction}`);
                break;
            case 'r':
                this.judge(1, 0);
                //console.log(`you entered ${direction}`);
                break;
            case 'l':
                this.judge(-1, 0);
                //console.log(`you entered ${direction}`);
                break;
            default:
                console.log('Sorry, you enterred a wrong direction.');
                console.log('u = up; d = down; r = right; l = left');
        }

    }

    promptInput() {
        //        console.log('method promptInput');

        let userInput = prompt('Which way?');
        userInput = userInput.toLowerCase();
        return userInput;
    }

    gameLogic() {

        while (this.Hatflag) {
            // Get user input
            this.print();
            let inputDirection = this.promptInput()
            this.move(inputDirection);


        }
    }

    print() {

        this.currentField.forEach(element => {
            let eachLine = '';
            element.forEach(item => eachLine += item.toString());
            console.log(eachLine);
        });


    }

    static generateField(height, width, percent) {
        const array = [];
        const symbols = ['O', '░'];
        let hatX = 0;
        let hatY = 0;
        let startX = 0;
        let startY = 0;
        for (let i = 0; i < height; i++) {
            let line = [];
            for (let j = 0; j < width; j++) {
                let checker = Math.random();
                if (checker < (percent)) {
                    line.push('O');
                } else {
                    line.push('░');
                }

                //                line.push(symbols[Math.floor(Math.random() * 100) % 2]);
            }
            array.push(line);
        }
        while (hatX == 0 && hatY == 0) {
            hatX = Math.floor(Math.random() * width);
            hatY = Math.floor(Math.random() * height);

        }


        array[hatY][hatX] = '^';
        //        array[0][0] = '*';
        
        do {
            startX = Math.floor(Math.random() * width);
            startY = Math.floor(Math.random() * height);

        } while (startY == hatY && startX == hatX);
        
        array[startY][startX] = '*';
        console.log(`start X = ${startX} start Y = ${startY}`);
        console.log(`hatY = ${hatY} hatX = ${hatX}`);

        return [array, startX, startY];
    }

    
}

let newGame = Field.generateField(4, 4, 0.2);
//newGame = Field.randomStart(newGame);
//console.log(Field.startX);
const myField = new Field(newGame);
//console.log(newGame);

myField.gameLogic();
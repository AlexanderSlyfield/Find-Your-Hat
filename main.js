const prompt = require('prompt-sync')({ sigint: true });
const { resolve } = require('path');
const readline = require("readline");

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Field {
    constructor(field) {
        this.field = field,
            this.row = 0,
            this.col = 0
    }

    print() {
        console.log(this.field.map(arr => arr.join("")).join("\n"));
    }

    isInBounds() {
        return !(
            this.row < 0 ||
            this.col < 0 ||
            this.row > this.field.length - 1 ||
            this.col > this.field[this.row].length - 1
        );
    }

    isHole() {
        return this.field[this.row][this.col] === "O";
    };

    isHat() {
        return this.field[this.row][this.col] === "^";
    };

    askDirection() {
        return new Promise((resolve, reject) => {
            rl.question("Choose your path: ", (answer) => {
                resolve(answer)
            })
        })
    }

    async playGame() {

        let playing = true;
        let invalid = false;

        while (playing) {
            if (!invalid) {
                console.clear();
                console.log("\n")
                this.print();
            }


            const answer = await this.askDirection();

            switch (answer) {
                case "w": this.row -= 1
                    break;
                case "a": this.col -= 1
                    break;
                case "s": this.row += 1
                    break;
                case "d": this.col += 1
                    break;
                case "q":
                    console.log("Goodbye");
                    playing = false;
                    break;
                default:
                    console.log("Invalid input, please use 'wasd' to move.");
                    invalid = true;
                    continue;
            };

            if (!this.isInBounds()) {
                console.log("Out of bounds, try again.");
                playing = false;
                invalid = false;
            } else if (this.isHole()) {
                console.log("Sorry, you fell down a hole. Try again.");
                playing = false;
                invalid = false;
            } else if (this.isHat()) {
                console.log("Congrats, you found your hat!");
                console.log("You win!!");
                playing = false;
                invalid = false;
            } else {
                this.field[this.row][this.col] = "*";
                invalid = false;
            };

        }
        rl.close();


    }

    static generateField(height, width, holePercentage = 0.3) {

        const arr = Array.from({ length: height }, () => new Array(width).fill("░"));

        arr[0][0] = "*";

        const holeAmount = Math.floor(holePercentage * (height * width));

        for (let i = 0; i < holeAmount; i++) {
            const randomRow = Math.floor(Math.random() * (height - 1)) + 1;
            const randomCol = Math.floor(Math.random() * width);

            if (arr[randomRow][randomCol] === "O") {
                i -= 1;
            }
            arr[randomRow][randomCol] = "O";
        };

        for (let i = 0; i < 1; i++) {
            const randomRow = Math.floor(Math.random() * (height - 1)) + 1;
            const randomCol = Math.floor(Math.random() * width);

            if (arr[randomRow][randomCol] === "O") {
                i -= 1;
                continue;
            }

            arr[randomRow][randomCol] = "^"
        };

        return arr;
    }

};

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);


const myField2 = new Field(Field.generateField(12, 10));
myField2.playGame();



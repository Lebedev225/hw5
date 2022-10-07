

class Square {
    constructor(side) {
        this.side = side;
    }
    perimeter() {
        // this.perimeter = this.side*4
        // return this.perimeter
        return this.side*4
    }
    area() {
        return this.side**2
    }
    diagonal() {
        return Math.sqrt(2*(this.side)**2)
    }
    describe() {
        return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and a diagonal of ${this.diagonal()}`
    }
}

const firstSquare = new Square(2)
const secondSquare = new Square(3)
const thirdSquare = new Square(4)

console.log(firstSquare.describe())
console.log(secondSquare.describe())
console.log(thirdSquare.describe())


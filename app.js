document.addEventListener('DOMContentLoaded', function () {
    console.log('dom content loaded!');

    const MAX = 450;

    let shapeContainer = document.getElementById('shapeContainer');
    let circleBtn = document.getElementById('circleButton');
    let triangleBtn = document.getElementById('triangleButton');
    let rectangleBtn = document.getElementById('rectangleButton');
    let squareBtn = document.getElementById('squareButton');

    class Shape {
        constructor(x, y) {
            this.shape = document.createElement('div');
            shapeContainer.appendChild(this.shape);
            this.shape.style.left = `${x}px`;
            this.shape.style.top = `${y}px`
            this.removeShape();
        }
        removeShape(){
            this.shape.addEventListener('dblclick', () => {
                shapeContainer.removeChild(this.shape);
            })
        }
    }

    class Circle extends Shape {
        constructor(x, y) {
            super(x, y);
            this.shape.classList.add('circle');
            this.shape.style.height = `${document.getElementById('circleInput').value}px`;
            this.shape.style.width = `${document.getElementById('circleInput').value}px`;
            console.log(this.shape.style.height);
        }
    }

    class Triangle extends Shape {
        constructor(x, y) {
            super(x, y);
            this.shape.classList.add('triangle');
            this.shape.style.borderBottomStyle = 'solid';
            this.shape.style.borderBottomColor = 'blue';
            this.shape.style.borderLeftStyle = 'solid';
            this.shape.style.borderLeftColor = 'transparent';
            this.shape.style.borderBottomWidth = `${document.getElementById('triangleInput').value}px`;
            this.shape.style.borderLeftWidth = `${document.getElementById('triangleInput').value}px`;

        }
    }

    class Rectangle extends Shape {
        constructor(x, y) {
            super(x, y);
            this.shape.classList.add('rectangle');
            this.shape.style.height = `${document.getElementById('rectangleInputHeight').value}px`;
            this.shape.style.width = `${document.getElementById('rectangleInputWidth').value}px`;
        }
    }

    class Square extends Shape {
        constructor(x, y) {
            super(x, y);
            this.shape.classList.add('square');
            this.shape.style.height = `${document.getElementById('squareInput').value}px`;
            this.shape.style.width = `${document.getElementById('squareInput').value}px`;
        }
    }

circleBtn.addEventListener('click', insertCircle);
triangleBtn.addEventListener('click', insertTriangle);
rectangleBtn.addEventListener('click', insertRectangle);
squareBtn.addEventListener('click', insertSquare);

function insertCircle(){
    let xVal = randomLocation(0, MAX);
    let yVal = randomLocation(0, MAX);
    let cir = new Circle(xVal, yVal);
}

function insertTriangle(){
    let xVal = randomLocation(0, MAX);
    let yVal = randomLocation(0, MAX);
    let tri = new Triangle(xVal, yVal);
}

function insertRectangle(){
    let xVal = randomLocation(0, MAX);
    let yVal = randomLocation(0, MAX);
    let rec = new Rectangle(xVal, yVal);
}

function insertSquare(){
    let xVal = randomLocation(0, MAX);
    let yVal = randomLocation(0, MAX);
    let sq = new Square(xVal, yVal);
}

function randomLocation(max, min){
 return Math.floor(Math.random() * (max - min) + min);
}

});
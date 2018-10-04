document.addEventListener('DOMContentLoaded', function () {
    console.log('dom content loaded!');

    const MAX = 450;

    let shapeContainer = document.getElementById('shapeContainer');
    let circleBtn = document.getElementById('circleButton');
    let triangleBtn = document.getElementById('triangleButton');
    let rectangleBtn = document.getElementById('rectangleButton');
    let squareBtn = document.getElementById('squareButton');
    let triangleInput = document.getElementById('triangleInput');
    let circleInput = document.getElementById('circleInput');
    let rectangleInputWidth = document.getElementById('rectangleInputWidth');
    let rectangleInputHeight = document.getElementById('rectangleInputHeight');
    let squareInput = document.getElementById('squareInput');
    
    class Shape {
        constructor(x, y) {
            this.shape = document.createElement('div');
            this.shape.style.left = `${x}px`;
            this.shape.style.top = `${y}px`;
            shapeContainer.appendChild(this.shape);
            this.removeShape();
        }

        removeShape() {
            this.shape.addEventListener('dblclick', () => {
                shapeContainer.removeChild(this.shape);
            });
        }
    }

    class Circle extends Shape {
        constructor(x, y) {
            super(x, y);
            this.shape.classList.add('circle');
            this.shape.style.height = `${circleInput.value}px`;
            this.shape.style.width = `${circleInput.value}px`;
            console.log(this.shape.style.height);
        }
    }

    class Triangle extends Shape {
        constructor(x, y) {
            super(x, y);
            this.shape.classList.add('triangle');
            this.shape.style.borderBottomWidth = `${triangleInput.value}px`;
            this.shape.style.borderLeftWidth = `${triangleInput.value}px`;

        }
    }

    class Rectangle extends Shape {
        constructor(x, y) {
            super(x, y);
            this.shape.classList.add('rectangle');
            this.shape.style.height = `${rectangleInputHeight.value}px`;
            this.shape.style.width = `${rectangleInputWidth.value}px`;
        }
    }

    class Square extends Shape {
        constructor(x, y) {
            super(x, y);
            this.shape.classList.add('square');
            this.shape.style.height = `${squareInput.value}px`;
            this.shape.style.width = `${squareInput.value}px`;
        }
    }

    circleBtn.addEventListener('click', insertCircle);
    triangleBtn.addEventListener('click', insertTriangle);
    rectangleBtn.addEventListener('click', insertRectangle);
    squareBtn.addEventListener('click', insertSquare);

    function insertCircle(){
        new Circle(...randomLocation());
    }

    function insertTriangle(){
        new Triangle(...randomLocation());
    }

    function insertRectangle(){
        new Rectangle(...randomLocation());
    }

    function insertSquare(){
        new Square(...randomLocation());
    }

    function randomLocation() {
        return [
            Math.floor(Math.random() * (MAX)), 
            Math.floor(Math.random() * (MAX))
        ];
    }

});
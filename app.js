document.addEventListener('DOMContentLoaded', function () {
    console.log('dom content loaded!');

    let shapeContainer = document.getElementById('shapeContainer');
    let circleBtn = document.getElementById('circleButton');
    let triangleBtn = document.getElementById('triangleButton');
    let rectangleBtn = document.getElementById('rectangleButton');
    let squareBtn = document.getElementById('squareButton');

    class Shape {
        constructor() {
            this.shape = document.createElement('div');
            this.createShape();
        }
        createShape() {
            shapeContainer.appendChild(this.shape);
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super();
            this.shape.classList.add('circle');
            this.createCircle();
        }
        createCircle() {
            circleBtn.addEventListener('click', () => {
                let circle = new Circle(10);
                console.log(circle);
            }) 
        }
    }

    class Triangle extends Shape {
        constructor(height) {
            super();
            this.shape.classList.add('triangle');

        }
        createTriangle() {

        }
    }

    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.shape.classList.add('rectangle');

        }
        createRectangle() {

        }
    }

    class Square extends Shape {
        constructor(sides) {
            super();
            this.shape.classList.add('square');
        }
        createSquare() {

        }
    }






});
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius * 2;
    }

    getCircumference() {
        return this.radius * Math.PI * 2;
    }

    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
};

const circle_a = new Circle(8);
console.log(circle_a.getDiameter());
console.log(circle_a.getCircumference());
console.log(circle_a.getArea());
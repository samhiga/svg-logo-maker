const {Triangle} = require("./shapes")
test('setting the shape and color', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

  
});

const {Square} = require("./shapes")
test('setting the shape and color', () => {
const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});


const {Circle} = require("./shapes")
test('setting the shape and color', () => {
const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});
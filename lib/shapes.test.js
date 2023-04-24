const {Triangle} = require("./shapes")
test('setting the shape and color', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="148, 40 244, 182 56, 182" transform="translate(1, -40)" fill="blue" />');

  
});

const {Circle} = require("./shapes")
test('setting the shape and color', () => {
const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="150" cy="105" r="80" fill="blue" />');

});

const {Square} = require("./shapes")
test('setting the shape and color', () => {
const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect x="91" y="45" width="120" height="120" fill="blue" />');

});
const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle} = require("./lib/shapes");
const {Square} = require("./lib/shapes");
const {Circle} = require("./lib/shapes");
const Svg = require("./lib/svg")

const questions = [{
    type: 'input',
    message: 'What text do you want in your logo?',
    name: 'text',
  },
  {
    type: 'input',
    message: 'what color do you want that text to be?',
    name: 'textColor',
  },
  {
    type: 'input',
    message: 'what color do you want the shape to be?',
    name: 'shapeColor',
  },
  {
    type: 'list',
    message: 'Please pick a shape?',
    name: 'shape',
    choices: ["triangle", "circle", "square"]
  }

];

function writeToFile(fileName, data) {
return fs.writeFileSync(fileName, data)
}


function init() {
  inquirer.prompt(questions).then(response => {
    console.log("Generating Your Logo!")
    let shape 
    if (response.shape === "triangle") {
        shape = new Triangle()
    } else if (response.shape === "square"){
        shape = new Square()
    } else {
        shape = new Circle()
    }
    shape.setColor(response.shapeColor)
    let svgInstance = new Svg ()
    svgInstance.setText(response.text, response.textColor)
    svgInstance.setShape(shape)
    writeToFile("test.svg", svgInstance.render())
  })

}

// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle} = require("./lib/shapes");
const Svg = require("./lib/svg")

const questions = [{
    type: 'input',
    message: 'What is the project title?',
    name: 'text',
  },
  {
    type: 'input',
    message: 'Write a short description of your project',
    name: 'textColor',
  },
  {
    type: 'input',
    message: 'Write the installation process for your project',
    name: 'shapeColor',
  },
  {
    type: 'list',
    message: 'Write the installation process for your project',
    name: 'shape',
    choices: ["triangle", "circle", "square"]
  }

];

function writeToFile(fileName, data) {
return fs.writeFileSync(fileName, data)
}


function init() {
  inquirer.prompt(questions).then(response => {
    console.log("w")
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

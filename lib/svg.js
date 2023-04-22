class Svg {
    constructor(){
        this.textElement = ""
        this.shapeElement = ""
    }
    setText(txt, clr) {
        this.textElement = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${clr}">${txt}</text>`

    }
    setShape(shape) {
        this.shapeElement = shape.render()
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        ${this.shapeElement}
      
        ${this.textElement}
      
      </svg>`
    }
}
module.exports = Svg
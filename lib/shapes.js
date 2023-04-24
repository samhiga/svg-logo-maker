class Shape {
    constructor (){
        this.color = ''
    }
    setColor(color){
        this.color = color
    }
}
class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="105" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render(){
        return `<rect x="84" y="45" width="120" height="120" fill="${this.color}" />`
    }
}
module.exports = {Triangle, Circle, Square}
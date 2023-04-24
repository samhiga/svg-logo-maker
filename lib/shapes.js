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
        return `<polygon points="148, 40 244, 182 56, 182" transform="translate(1, -40)" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="105" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render(){
        return `<rect x="91" y="45" width="120" height="120" fill="${this.color}" />`
    }
}
module.exports = {Triangle, Circle, Square}
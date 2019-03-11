class DivCreator {
    constructor(height = 100, width = 100, bg = '#fff', fontSize = 20, textAlign = 'center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(txt) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = txt;
        newDiv.style.cssText = `height:${this.height}px;width:${this.width}px;background:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign};`;
        document.body.appendChild(newDiv);
    }
}

const squareDiv = new DivCreator(300, 300, '#00f3ff', 20, 'center');
squareDiv.createDiv('Вот и все!');




class rectangle {
  width;
  height;

  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
  calculaterect() {
    return this.width * this.height;
  }
  printpattern(patternChar) {
    let pattern = '#';
    for (let i = 1; i <this.height ; i++) {
      console.log(pattern);
      pattern = pattern + '#' + patternChar;
    }
}
}
  
let rect = new rectangle(4, 3);
console.log(rect.calculaterect());
console.log(rect.printpattern());

class Triangle {
  base;
  height;

  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  calculatetriangle() {
    let area = (1 / 2) * this.base * this.height;
    return area;
  }
}
const triangle1 = new Triangle(4, 6);

console.log(triangle1.calculatetriangle());

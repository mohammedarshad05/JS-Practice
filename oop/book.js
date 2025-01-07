class book {
  title;
  author;

  constructor(t, a) {
    this.title = t;
    this.author = a;
  }
  printDetails() {
    console.log(`${this.title} is  written by ${this.author}`);
  }
}

let mybook = new book("The Alchemist", "Paulo Coelho");

mybook.printDetails();
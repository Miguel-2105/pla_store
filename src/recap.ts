const myName = 'Mikitp';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 15);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `my name is ${this.name}, ${this.name}`;
  }
}

const miki = new Persona(15, 'mikitp');
miki.getSummary();

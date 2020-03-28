class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  getNombre() {
    return this.nombre;
  }

  setEdad(age) {
    this.edad = age;
  }
  static saludo() {
    return 'hola!!!!';
  }
}

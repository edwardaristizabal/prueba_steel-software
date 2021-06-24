export class Biblioteca {
  nombre: string;
  direccion: string;
  telefono: number;
  email: string;
  max_libros: number;

  constructor(nombre: string, direccion: string, telefono: number, email: string, max_libros: number){
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
    this.max_libros = max_libros;
  }
}

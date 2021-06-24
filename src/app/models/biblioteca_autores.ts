export class Biblioteca {
  nombre: string;
  fecha_nacimiento: number;
  ciudad_proc: string;
  email: string;

  constructor(nombre: string, fecha_nacimiento: number, ciudad_proc: string, email: string){
    this.nombre = nombre;
    this.fecha_nacimiento = fecha_nacimiento;
    this.ciudad_proc = ciudad_proc;
    this.email = email;
  }
}

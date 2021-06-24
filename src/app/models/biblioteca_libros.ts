export class Biblioteca {
  titulo: string;
  año: number;
  genero: string;
  num_paginas: number;
  editorial: string;
  autor: string;

  constructor(titulo: string, año: number, genero: string, num_paginas: number, editorial: string, autor: string){
    this.titulo = titulo;
    this.año = año;
    this.genero = genero;
    this.num_paginas = num_paginas;
    this.editorial = editorial;
    this.autor = autor;
  }
}

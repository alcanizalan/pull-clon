export class Product{
  id: number;
  name: String;
  price: number;
  colores: {nameColor: string, codeColor: string}[] = [];

  constructor(id: number, name: String, price: number, colores: {nameColor: string, codeColor: string}[]){
    this.id = id;
    this.name = name;
    this.price = price;
    this.colores = colores;
  }
}

export class Cart extends Product{
  productosCarrito: Product

  constructor(id: number, name: String, price: number, colores: {nameColor: string, codeColor: string}){
    super(id, name, price, colores);
  }

  agregarProducto(producto: Product[]){
    this.productos
  }
}

export class Pantalon extends Product{
  talla: String;

  constructor(id: number, name: String, price: number, talla: String, colores: {nameColor: string, codeColor: string}[]){
    super(id, name, price, colores);
    this.talla = talla;
  }
}

export class Camiseta extends Product{

}

export class Sudadera extends Product{

}

export class Jean extends Product{

}

export class Chaqueta extends Product{

}

export class Accesorio extends Product{

}

export class Gorro extends Accesorio{

}

export class Gafas extends Accesorio{

}

export class Bisuteria extends Accesorio{

}

interface ICarrito {
  cantidad: number;
  id: number;
  imagen: string;
  nombre: string;
  precio: number;
}

type updateCarrito = Omit<ICarrito, 'imagen' | 'nombre' | 'precio'>;

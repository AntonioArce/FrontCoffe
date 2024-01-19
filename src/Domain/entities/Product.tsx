export interface Product{
    id?: string;
    idProductos?: string,
    nombre: string,
    descripcion: string, 
    stock: any,
    precio: any,
    Tipo_Producto_idTipo_Producto: string | undefined
    imagen: string,
    quantity?: number
}
class Producto {
    constructor (nombre, precio, marca, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat (precio);
        this.marca = marca;
        this.cantidad = cantidad;
    }

    sumarIVA (){
        return this.precio* this.cantidad *1.21;
    }
}

const arrayProductos =[];
do {
    var comprobacion = prompt ('Ingrese el nombre de un producto o fin para terminar de agregar');
    if (comprobacion == "fin" || comprobacion == "FIN" || comprobacion === "Fin"){
        break;
    }
    else{
            nombreP = comprobacion;
            let precioP = prompt ('Ingrese el precio del producto en pesos');
            let marcaP = prompt ('Ingrese la marca del producto')
            let cantidadP = prompt ('Ingrese la cantidad comprada del producto');
            arrayProductos.push (new Producto (nombreP, precioP, marcaP, cantidadP));
        }
}

while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")


console.log (arrayProductos)

for
(var producto of arrayProductos) {
    console.log ("Nombre del producto: " + producto.nombre);
    console.log ("Marca del producto: " + producto.marca);
    console.log ("Cantidad adquirida: " + producto.cantidad);
    console.log ("Precio unitario sin IVA: " + producto.precio);
    console.log ("Precio final con IVA: " + producto.sumarIVA());
}
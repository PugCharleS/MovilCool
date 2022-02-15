const productos = [
  {
    id: 1,
    nombre: "iPhone 11",
    precio: 400,
    almacenamiento: 64,
    imageUrl: "https://m.media-amazon.com/images/I/81Jf4uu-xzL._AC_SL1500_.jpg",
    color: "Black",
    categoria: "celulares",
    marca: "Apple",
    promocion: true,
    destacado: false,
  },
  {
    id: 2,
    nombre: "iPhone 12",
    precio: 500,
    almacenamiento: 128,
    imageUrl: "https://m.media-amazon.com/images/I/81Jf4uu-xzL._AC_SL1500_.jpg",
    color: "Gold",
    categoria: "celulares",
    marca: "Apple",
    promocion: true,
    destacado: false,
  },
  {
    id: 3,
    nombre: "iPhone 12 Pro",
    precio: 800,
    almacenamiento: 256,
    imageUrl: "https://m.media-amazon.com/images/I/81Jf4uu-xzL._AC_SL1500_.jpg",
    color: "White",
    categoria: "celulares",
    marca: "Apple",
    promocion: true,
    destacado: true,
  },
  {
    id: 4,
    nombre: "iPhone 13 chido",
    precio: 800,
    almacenamiento: 128,
    imageUrl: "https://m.media-amazon.com/images/I/81Jf4uu-xzL._AC_SL1500_.jpg",
    color: "White",
    categoria: "celulares",
    marca: "Apple",
    promocion: true,
    destacado: true,
  },
  {
    id: 5,
    nombre: "Galaxy S10 Lite",
    precio: 800,
    almacenamiento: 128,
    imageUrl:
      "https://images.samsung.com/is/image/samsung/mx-galaxy-s10-lite-g770-sm-g770fzblmxo-frontprismblue-203936899?$720_576_PNG$",
    color: "White",
    categoria: "celulares",
    marca: "Samsung",
    promocion: true,
    destacado: true,
  },
  {
    id: 6,
    nombre: "AirTag",
    precio: 280,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104_FMT_WHH?wid=532&hei=582&fmt=png-alpha&.v=1617761673000",
    color: "White",
    categoria: "accesorios",
    marca: "Apple",
    promocion: false,
    destacado: false,
  },
  {
    id: 7,
    nombre: "MagSafe",
    precio: 250,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0Q3?wid=532&hei=582&fmt=png-alpha&.v=1629865186000",
    color: "Cuero",
    categoria: "accesorios",
    marca: "Apple",
    promocion: false,
    destacado: false,
  },
];

export const getFetch = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } else {
    reject("error");
  }
});

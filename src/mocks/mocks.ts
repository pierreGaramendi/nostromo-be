const a = {
  nombre: 'celular A1',
  marca: 'xiomi',
  condicion: 'Nuevo',
  categories: ['celulares', 'computadoras'],
  PUC: '90812319283',
  precio: 10.1,
  CURRENCY: 'SOLES',
  descuento: [
    {
      discPercentage: 0.1,
      active: true,
    },
  ],
  quantity: 123,
  modelo: 'A1',
  images: ['abc', 'abc'],
  options: {
    screenSize: "6'",
    color: 'red',
    genero: 'hombre',
    tela: 'kashmir',
  },
  cantidadDeVendidos: 100,
  sku: ['E0000123', 'E0000124', 'E0000125'],
};

/* garantias: del vendedor, de fabrica, sin garantia
ofreceer retiro en persona

domicilio del remitente

maximo cantidad 1 para usados
VALIDACION DE PERTENENCIA DE CUENTA
simulador de precios
envios propios de la empresa
como persistir like dado por alguien
 */
const question = [
  {
    question: 'Tu hermana esta soltera?',
    answer: 'jodete!',
  },
];

const notification = {
  title: 'Eres feo',
  description: 'Eres muy feo',
  image: '../../',
  seen: false,
};

const review = {
  rating: 2,
  comment: 'Una porqueria de producto',
  like: 0,
  dislike: 0,
};

const categories = {
  Tecnología: {
    'Celulares y Teléfonos': ['Celulares y Smartphones', 'Accesorios para Celulares'],
    Computación: ['Laptops', 'iPad y Tablets', 'Computadoras y Servidores', 'Accesorios para Laptops'],
    'Cámaras y Accesorios': ['Accesorios para Cámaras', 'Video Cámaras'],
    Electrónica: ['Audio y Video', 'Accesorios para Audio y Video', 'Equipos de DJ y Accesorios', 'Audio', 'TVs'],
    'Consolas y Videojuegos': ['Para PlayStation', 'Videojuegos'],
  },
};

const productone = {
  title: 'celular A1',
  sellerId: '64ad97efd33c9dc7ac3e2285',
  description: 'un celular xiomi robado',
  skus: ['E0000123', 'E0000124', 'E0000125'],
  categories: ['celulares', 'computadoras'],
  price: 10.1,
  quantity: 23,
  images: ['abc'],
  condition: 'nuevo',
  discount: {
    percentage: 0.1,
    active: true,
  },
  brand: 'xiomi',
  sold: 1,
  PUC: '90812319283',
  warranty: 'del vendedor',
  pickUpInPerson: false,
};

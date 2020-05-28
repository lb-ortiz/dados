const fs = require('fs');

const restaurants = [
  {
    id: '1',
    name: "Feira do João",
    priceRange: '$$',
    imageSrc: '/images/1-Feira Joao.jpg',
    imageDescription: 'Foto do logo da feira do joao',
    description: 'Tomate, Cenoura, e Batata',
    menu: [
      { item: 'Tomate Unitário', price: 0.45 },
      { item: 'Cenoura Kg', price: 4 },
      { item: 'Batata Kg', price: 10 },
    ],
  },
  {
    id: '2',
    name: 'Fresh Fruit',
    priceRange: '$',
    imageSrc: '/images/2-Frersh Fruit.jpg',
    imageDescription: 'Foto do logo Fresh Fruit',
    description: "As melhores maças de São Paulo",
    menu: [
      { item: 'Maça', price: 4 },
      { item: 'Suco de Maça', price: 4 },
      { item: 'Banana', price: 6 },
    ],
  },
  {
    id: '3',
    name: "Eat Fresh",
    priceRange: '$$',
    imageSrc: '/images/3-Eat Fresh.jpg',
    imageDescription: 'Foto do logo Eat Fresh',
    description: 'Legumes Váriados',
    menu: [
      { item: 'Beringela Unitário', price: 10 },
      { item: 'Abobrinha Kg', price: 12 },
      { item: 'Cebola Kg', price: 15 },
    ],
  },
  {
    id: '4',
    name: 'Feria na Mão',
    priceRange: '$$',
    imageSrc: '/images/4-Feira na Mao.jpg',
    imageDescription: 'Foto do logo Feira',
    description: "Frutas e legumes, é aqui!",
    menu: [
      { item: 'Laranja Kg', price: 7 },
      { item: 'Abacaxi', price: 6 },
      { item: 'Couve-flor', price: 5 },
    ],
  },
  {
    id: '5',
    name: 'Feira do Produtor',
    priceRange: '$$$',
    imageSrc: '/images/5-Feira do Produtor.jpg',
    imageDescription: 'Foto do logo da Feira do produtor',
    description: 'Produtos mais frescos de São Paulo',
    menu: [
      { item: 'Pêra Kg', price: 8 },
      { item: 'Banana Kg', price: 5 },
      { item: 'Uva Kg ', price: 5 },
    ],
  },
  {
    id: '6',
    name: 'Pastelaria Silva',
    priceRange: '$',
    imageSrc: '/images/6-Pastel Silva.jpg',
    imageDescription: 'Foto do logo da pastelaria',
    description: 'Melhor pastel do centro da ceidade',
    menu: [
      { item: 'Carne com Queijo', price: 7 },
      { item: 'Calabresa', price: 7 },
      { item: 'Franco com Catupiry', price: 7 },
    ],
  },
  {
    id: '7',
    name: 'Caldo de Cana Kidelicia',
    priceRange: '$$$$',
    imageSrc: '/images/7-Caldo de Cana Kidelicia.jpg',
    imageDescription: 'Foto do logo Caldo de Cana Kidelicia',
    description: 'Adoce sua vida com caldo de cana',
    menu: [
      { item: 'Caldo de Cana', price: 8 },
      { item: 'Refrigerante', price: 6 },
      { item: 'Água', price: 5 },
    ],
  },
  {
    id: '8',
    name: 'Empório de Bebidas',
    priceRange: '$$',
    imageSrc: '/images/8-Emporio.jpg',
    imageDescription: 'Foto do logo do Emporio',
    description: "Bebidas para quase toda família",
    menu: [
      { item: 'pack Cerveja', price: 30 },
      { item: 'Vodka 1L', price: 80 },
      { item: 'Whisky 750ml', price: 98 },
    ],
  },
  {
    id: '9',
    name: "Peixaria Onda Viva",
    priceRange: '$$$',
    imageSrc: '/images/9-Peixaria.jpg',
    imageDescription: 'Foto do logo da Peixaria',
    description: 'Peixes e Frutos do mar frescos',
    menu: [
      { item: 'Salmão Kg', price: 75 },
      { item: 'Camarão Kg', price: 99 },
      { item: 'Robalo Kg', price: 77 },
    ],
  },
  {
    id: '10',
    name: "Tio Du Pastel",
    priceRange: '$',
    imageSrc: '/images/10-Tio Du Pastel.jpg',
    imageDescription: 'Foto do Logo Tio Du Pastel',
    description: 'Pastéis sem iguais',
    menu: [
      { item: 'Carne Seca com queijo', price: 9 },
      { item: 'Quatro Queijos', price: 9 },
      { item: 'Nutella', price: 12 },
    ],
  },
];

fs.writeFileSync('./content/restaurants.json', JSON.stringify(restaurants));
try {
  fs.mkdirSync('./content/restaurants');
} catch (e) {
  if (e.code !== 'EEXIST') throw e;
}
restaurants.forEach(restaurant => {
  fs.writeFileSync(
    `./content/restaurants/${restaurant.id}.json`,
    JSON.stringify(restaurant),
  );
});

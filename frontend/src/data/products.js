import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import tshirt1 from './images/tshirt1.jpg';
import kurti1 from './images/kurti1.jpg';
import WomenPant1 from './images/WomenPant1.jpg';
import WomenPant2 from './images/WomenPant2.jpg';
import WomenPant3 from './images/WomenPant3.jpg';
import WomenPant4 from './images/WomenPant4.jpg';

const products = [
  {
    id: '1',
    name: 'Classic Cotton T-Shirt',
    description: 'Premium cotton t-shirt with a comfortable fit and breathable fabric.',
    price: 29.99,
    image: image1, // Use imported image
    category: 'Men',
    collection: 'casual',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Navy'],
    similar: ['5'],
  },
  {
    id: '2',
    name: 'Floral Summer Dress',
    description: 'Beautiful floral print dress perfect for summer occasions.',
    price: 59.99,
    image: image2, // Use imported image
    category: 'Women',
    collection: 'summer',
    size: ['XS', 'S', 'M', 'L'],
    color: ['Blue', 'Pink'],
    similar: ['6'],
  },
  {
    id: '3',
    name: 'Kids Denim Overalls',
    description: 'Durable and cute denim overalls for active kids.',
    price: 39.99,
    image: image3, // Use imported image
    category: 'Kids',
    collection: 'casual',
    size: ['2T', '3T', '4T', '5T'],
    color: ['Light Blue', 'Dark Blue'],
    similar: [],
  },
  {
    id: '4',
    name: 'Winter Parka',
    description: 'Warm and stylish winter parka for cold weather.',
    price: 129.99,
    image: image4, // Use imported image
    category: 'Men',
    collection: 'winter',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Black', 'Navy', 'Green'],
    similar: [],
  },
  {
    id: '5',
    name: 'Nimble PURPLE Label Cotton Stretch Regular Polo T-shirt',
    description: 'Nimble Purple Label products are crafted using state-of-the-art technology and in deference to sustainability. These are the epitome of luxury and conscientiousness.',
    price: 129.99,
    image: tshirt1, // Use imported image
    category: 'Men',
    collection: 'winter',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Black', 'Navy', 'Green'],
    similar: ['1'],
  },
  {
    id: '6',
    name: 'Festival Special Kurti And Pant With Dupatta Set',
    description: 'Festival is here and its just the right time to welcome ethnic attire in your wardrobe. These easy breezy A-line Alia Cut Cotton Suits showcasing prints, intricate embroidery. If is print matching mal mal dupatta and pant.',
    price: 97,
    image: kurti1, // Use imported image
    category: 'Women',
    collection: 'casual',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['Purple'],
    similar: ['2'],
  },
  {
    id: '7',
    name: 'Festival Special Kurti And Pant With Dupatta Set',
    description: 'Comfortable and stylish women pants.',
    price: 49.99,
    image: WomenPant1, // Use imported image
    category: 'Women',
    collection: 'winter',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black'],
    similar: ['8', '9', '10'],
  },
  {
    id: '8',
    name: 'Women Pant 2',
    description: 'Comfortable and stylish women pants.',
    price: 49.99,
    image: WomenPant2, // Use imported image
    category: 'Women',
    collection: 'winter',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black'],
    similar: ['7', '9', '10'],
  },
  {
    id: '9',
    name: 'Kid Tapered Slim Fit Trouser',
    description: 'Comfortable and stylish women pants.',
    price: 49.99,
    image: WomenPant3, // Use imported image
    category: 'Women',
    collection: 'winter',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black'],
    similar: ['7', '8', '10'],
  },
  {
    id: '10',
    name: 'Kid Tapered Slim Fit Trouser',
    description: 'Comfortable and stylish women pants.',
    price: 49.99,
    image: WomenPant4, // Use imported image
    category: 'Women',
    collection: 'winter',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black'],
    similar: ['7', '8', '9'],
  },
];

export default products;
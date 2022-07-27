const db = require('../db')
const { Product, Commnet } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = [
    {
      product: 'FULL LENGTH PANTS',
      price: 50.0,
      description:
        'High-waisted pants with side pockets and back false welt pockets. Pronounced darts at front. Front zip and button closure.',
      category: 'PANTS',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/7385/508/704/2/w/750/7385508704_2_2_1.jpg?ts=1654701533620',
      rating: '4.3',
      inStock: 40
    },
    {
      product: 'BASIC CROPPED KNIT TOP',
      price: 35.0,
      description: 'BASIC CROPPED KNIT TOP',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/3519/030/629/2/w/750/3519030629_1_1_1.jpg?ts=1658476179579',
      rating: '4.0',
      inStock: 15
    },
    {
      product: 'PRINTED T-SHIRT',
      price: 10.0,
      description: 'Round neck T-shirt with short sleeves. Contrasting print.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/0264/850/022/2/w/750/0264850022_1_1_1.jpg?ts=1657705479397',
      rating: '4.0',
      inStock: 15
    },
    {
      product: 'RIB TANK TOP',
      price: 25.9,
      description: 'Round neck T-shirt with short sleeves.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/3519/030/629/2/w/750/3519030629_1_1_1.jpg?ts=1658476179579',
      rating: '3.5',
      inStock: 15
    },
    {
      product: 'RUFFLED TOP',
      price: 27.9,
      description: 'Round neck T-shirt with short sleeves. Self ruffle detail.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/V/0/1/p/2298/102/406/2/w/750/2298102406_1_1_1.jpg?ts=1646740428817',
      rating: '3.0',
      inStock: 15
    },
    {
      product: 'RIBBED TULLE TRIM TOP',
      price: 27.9,
      description:
        'Round neck top with short sleeves. Matching tulle fabric. Front button closure.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/0858/805/250/2/w/750/0858805250_2_1_1.jpg?ts=1658143360516',
      rating: '2.9',
      inStock: 5
    },
    {
      product: 'RIBBED T-SHIRT',
      price: 6.9,
      description: 'Round neck tank top.',
      category: 'TOP',
      image:
        'https://static.zara.net/photos///2022/I/0/1/p/3253/302/250/2/w/750/3253302250_1_1_1.jpg?ts=1656425102898',
      rating: '5.0',
      inStock: 15
    }
  ]

  await Product.insertMany(products)
  console.log(`created products`)
}

const run = async () => {
  await main()
  db.close()
}

run()

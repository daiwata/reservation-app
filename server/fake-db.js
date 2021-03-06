const Product = require('./model/product')

class FakeDb {

    constructor() {
        this.products = [{
                name: 'Phone XL',
                coverImage: './assets/img/phone-cover.jpg',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'A large phone with one of the best screens1',
                heading2: 'A large phone with one of the best screens2',
                heading3: 'A large phone with one of the best screens3',
                headingtext1: 'A large phone with one of the best screens1',
                headingtext2: 'A large phone with one of the best screens2',
                headingtext3: 'A large phone with one of the best screens3',
            },
            {
                name: 'Phone Mini',
                coverImage: './assets/img/phone-cover.jpg',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'A large phone with one of the best screens1',
                heading2: 'A large phone with one of the best screens2',
                heading3: 'A large phone with one of the best screens3',
                headingtext1: 'A large phone with one of the best screens1',
                headingtext2: 'A large phone with one of the best screens2',
                headingtext3: 'A large phone with one of the best screens3',
            },
            {
                name: 'Phone Standard',
                coverImage: './assets/img/phone-cover.jpg',
                price: 299,
                description: '',
                heading1: 'A large phone with one of the best screens1',
                heading2: 'A large phone with one of the best screens2',
                heading3: 'A large phone with one of the best screens3',
                headingtext1: 'A large phone with one of the best screens1',
                headingtext2: 'A large phone with one of the best screens2',
                headingtext3: 'A large phone with one of the best screens3',
            },
            {
                name: 'Phone Special',
                coverImage: './assets/img/phone-cover.jpg',
                price: 999,
                description: '',
                heading1: 'A large phone with one of the best screens1',
                heading2: 'A large phone with one of the best screens2',
                heading3: 'A large phone with one of the best screens3',
                headingtext1: 'A large phone with one of the best screens1',
                headingtext2: 'A large phone with one of the best screens2',
                headingtext3: 'A large phone with one of the best screens3',
            },
        ];
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = FakeDb
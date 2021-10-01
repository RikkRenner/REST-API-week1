const request = require('supertest');
const app = require('./app').app;
const build = require('./app').productBuilder;

// TEST THE REST API ENDPOINT FOR GET
describe('GET requests', () => {
    
    test('GET product/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read')
        expect(res.statusCode).toBe(200);
    });

    test('GET bad endpoint, expect 404', async () => {
      const res = await request(app).get('/badEndPoint')
      expect(res.statusCode).toBe(404);
    });

});

// TEST THE REST API ENDPOINT FOR POST
describe('The Create request is invoked', () => {
    test('it should return a HTTP code of 201', async () => {
        const res = await request(app)
          .post('/product/create')
          .send(build("Toaster", "Cheap Bread Warmer", 10))
        
          expect(res.statusCode).toBe(201)
    });        
});

// UNIT TEST THE PRODUCT BUILDER
describe('The product builder is called with values', () => {
    test('it should return the correct product', () => {
        let expectedProduct = {
            name: "Kettle",
            description: "Water Hotter",
            price: 5
        };
        let product = build("Kettle", "Water Hotter", 5)
        
        expect(product).toEqual(expectedProduct);
    });

});

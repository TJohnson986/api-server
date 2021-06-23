'use strict';

const { db, foodCollection, clothesCollection } = require('../src/models/index.js');


beforeAll(async ()=> {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('testing collection', () => {
  test('should create a food and clothes', async () => {
    let newFood = await foodCollection.create({name: 'test'});
  
    expect (newFood.id).toEqual(1);
    expect (newFood.name).toEqual('test');

    let newClothes = await clothesCollection.create({name: 'test clothes', customerId: newFood.id});
    expect (newClothes.name).toEqual('test clothes');
  });
});
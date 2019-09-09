
const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('auction_attachments').insert([
        {auctionId: 1, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 1, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 2, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 2, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 2, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 3, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 4, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 5, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 5, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 6, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 6, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 6, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 7, attachment: faker.image.cats(), type: 'image'},
        {auctionId: 8, attachment: faker.image.cats(), type: 'image'},
      ]);
    
};

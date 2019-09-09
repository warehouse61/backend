const faker = require('faker');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('auctions').insert([
        {affiliateId: 1, locationId: 1, title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 1, locationId: 2, title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 2, locationId: 4, title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 2, locationId: 6, title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 3, locationId: 7, title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 4, locationId: 8, title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 5, locationId: 10, title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 6, locationId: 13, title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 7, locationId: 14, title: faker.lorem.sentence(), status: 'In Progress', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 9, locationId: 35, title: faker.lorem.sentence(), status: 'In Progress', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 10, locationId: 36, title: faker.lorem.sentence(), status: 'Upcoming', format: 'fixed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 10, locationId: 48, title: faker.lorem.sentence(), status: 'Upcoming', format: 'fixed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 6, locationId: 43, title: faker.lorem.sentence(), status: 'Completed', format: 'fixed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 3, locationId: 37, title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
        {affiliateId: 7, locationId: 44 , title: faker.lorem.sentence(), status: 'Upcoming', format: 'timed', description: faker.lorem.paragraph(), notesToBidder: faker.lorem.paragraphs(3) },
      ]);
   
};

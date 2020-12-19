const faker = require('faker')

const createFakeLocations = () => ({
  name: faker.company.companyName(),
  address1: faker.address.streetAddress(),
  address2: faker.address.secondaryAddress(),
  city: faker.address.city(),
  state: 'OH',
  zip: faker.address.zipCode(), 
  country: 'US',
  phone: faker.phone.phoneNumberFormat(), 
  phoneType: "work", 
  phoneExt: "123",
  fax: faker.phone.phoneNumberFormat()
  


})


exports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
        // Inserts seed entries
      const fakeLocations = [];
      const count = 50;
      for(let i =0; i< count; i++){
        fakeLocations .push(createFakeLocations());
      }
      await knex('locations')
      .insert(fakeLocations);
  
};
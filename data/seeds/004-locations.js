const faker = require('faker')

const createFakeLocations = () => ({
  name: faker.company.companyName(),
  address1: faker.address.streetAddress(),
  address2: faker.address.secondaryAddress(),
  city: faker.address.city(),
  phone: faker.phoneNumber.phoneNumber(), 
  phoneType: "work", 
  phoneExt: "123",
  fax: faker.phoneNumber.phoneNumber()
  


})


exports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
        // Inserts seed entries
      const fakeLocations = [];
      const count = 10;
      for(let i =0; i< count; i++){
        fakeLocations .push(createFakeLocations());
      }
      await knex('locations')
      .insert(fakeLocations);
  
};
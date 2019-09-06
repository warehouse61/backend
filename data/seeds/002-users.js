const faker = require('faker')

const createFakeUser = () => ({
  email: faker.internet.email(),
  firstName: faker.name.firstName(), 
  lastName: faker.name.lastName(),
  password: "pass", 
  address1: faker.address.streetAddress(),
  address2: faker.address.secondaryAddress(),
  city: faker.address.city(), 
  state: faker.address.usState(),
  country: "US", 
  zip: faker.address.zip(), 
  phone: faker.phoneNumber.phoneNumber(), 
  phoneType: "cell", 
  phone2: faker.phoneNumber.phoneNumber(), 
  phone2Type: "home", 
  phone3: faker.phoneNumber.phoneNumber(), 
  phone3Type: "work", 
  phone3Ext: "123",
  fax: faker.phoneNumber.phoneNumber(), 
  image: faker.image.people()
  
})


exports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
        // Inserts seed entries
      const fakeUsers = [];
      const count = 100;
      for(let i =0; i< count; i++){
        fakeUsers.push(createFakeUser());
      }
      await knex('users')
      .insert(fakeUsers);
  
};
 
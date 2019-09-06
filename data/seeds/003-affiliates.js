const faker = require('faker')

const createFakeAffiliate = () => ({
  name: faker.company.companyName(),
  website: faker.internet.domainName(),
  description: faker.company.catchPhrase(),
  phone: faker.phoneNumber.phoneNumber(), 
  phoneType: "cell", 
  phone2: faker.phoneNumber.phoneNumber(), 
  phone2Type: "home", 
  phone3: faker.phoneNumber.phoneNumber(), 
  phone3Type: "work", 
  phone3Ext: "123",
  fax: faker.phoneNumber.phoneNumber(), 
  image: faker.image.business()
  


})


exports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
        // Inserts seed entries
      const fakeAffiliates = [];
      const count = 10;
      for(let i =0; i< count; i++){
        fakeAffiliates .push(createFakeAffiliate());
      }
      await knex('affiliates')
      .insert(fakeAffiliates);
  
};
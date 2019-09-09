const faker = require('faker')

const createFakeAffiliate = () => ({
  name: faker.company.companyName(),
  website: faker.internet.domainName(),
  description: faker.company.catchPhrase(),
  phone: faker.phone.phoneNumberFormat(), 
  phoneType: "cell", 
  phone2: faker.phone.phoneNumberFormat(), 
  phone2Type: "home", 
  phone3: faker.phone.phoneNumberFormat(), 
  phone3Type: "work", 
  phone3Ext: "123",
  fax: faker.phone.phoneNumberFormat(), 
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
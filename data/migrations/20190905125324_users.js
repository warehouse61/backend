
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();
      users.string('email', 255).notNullable().unique()
      users.string('email2', 255).unique()
      users.string('password', 255).notNullable()
      users.string('firstName', 255).notNullable()
      users.string('middleName', 255)
      users.string('lastName', 255).notNullable()
      users.string('address1', 255).notNullable()
      users.string('address2', 255)
      users.string('city', 255).notNullable()
      users.string('state', 2).notNullable()
      users.string('zip', 20).notNullable()
      users.string('phone', 20)
      users.string('phoneType', 20)
      users.string('phoneExt', 20)
      users.string('phone2', 20)
      users.string('phone2Type', 20)
      users.string('phone2Ext', 20)
      users.string('phone3', 20)
      users.string('phone3Type', 20)
      users.string('phone3Ext', 20)
      users.string('fax', 20), 
      users.binary('image'),
      users.timestamps(true, true);
      
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
  };
  

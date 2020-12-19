
exports.up = function(knex) {
    return knex.schema.createTable('affiliates', affiliates => {
        affiliates.increments('affiliateId');
        affiliates.string('name', 255).notNullable()
        affiliates.string('website', 255)
        affiliates.text('description')
        affiliates.string('phone', 20)
        affiliates.string('phoneType', 20)
        affiliates.string('phoneExt', 20)
        affiliates.string('phone2', 20)
        affiliates.string('phone2Type', 20)
        affiliates.string('phone2Ext', 20)
        affiliates.string('phone3', 20)
        affiliates.string('phone3Type', 20)
        affiliates.string('phone3Ext', 20)
        affiliates.string('fax', 20),
        affiliates.binary('image'),
        affiliates.timestamps(true, true);
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("affiliates");
  };

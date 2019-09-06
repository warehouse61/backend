
exports.up = function(knex) {
    return knex.schema.createTable('locations', locations => {
        locations.increments();
        locations.string('address1', 255).notNullable()
        locations.string('address2', 255)
        locations.string('city', 255).notNullable()
        locations.string('state', 255).notNullable()
        locations.string('zip', 20).notNullable()
        locations.string('country', 2).notNullable().defaultTo('US')
        locations.string('name', 255).notNullable()
        locations.string('phone', 20)
        locations.string('phoneType', 20)
        locations.string('phoneExt', 20)
        locations.string('phone2', 20)
        locations.string('phone2Type', 20)
        locations.string('phone2Ext', 20)
        locations.string('phone3', 20)
        locations.string('phone3Type', 20)
        locations.string('phone3Ext', 20)
        locations.string('fax', 20)
        locations.string('email')
        locations.string('coordinates')
        locations.text('directions')
        locations.string('hours')
        locations.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("locations");
};

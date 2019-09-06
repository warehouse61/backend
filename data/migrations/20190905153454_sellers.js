
exports.up = function(knex) {
    return knex.schema.createTable('sellers', sellers => {
        sellers.increments();
        sellers.integer('affiliateId')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('affiliates')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        sellers.integer('userId')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        sellers.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sellers");
};

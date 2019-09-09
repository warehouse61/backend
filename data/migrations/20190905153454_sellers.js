
exports.up = function(knex) {
    return knex.schema.createTable('sellers', sellers => {
        sellers.increments('sellerId');
        sellers.integer('affiliateId')
                .notNullable()
                .unsigned()
                .references('affiliateId')
                .inTable('affiliates')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        sellers.integer('userId')
                .notNullable()
                .unsigned()
                .references('userId')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        sellers.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sellers");
};

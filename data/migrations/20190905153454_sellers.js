
exports.up = function(knex) {
    return knex.schema.createTable('sellers', sellers => {
        sellers.increments();
        sellers.bigInteger('affiliateId').notNullable()
        sellers.bigInteger('userId').notNullable()
        sellers.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sellers");
};

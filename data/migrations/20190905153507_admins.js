
exports.up = function(knex) {
    return knex.schema.createTable('admins', admins => {
        admins.increments();
        admins.bigInteger('affiliateId').notNullable()
        admins.bigInteger('userId').notNullable()
        admins.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("admins");
};
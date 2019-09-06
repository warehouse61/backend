
exports.up = function(knex) {
    return knex.schema.createTable('admins', admins => {
        admins.increments();
        admins.integer('affiliateId')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('affiliates')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        admins.integer('userId')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        admins.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("admins");
};
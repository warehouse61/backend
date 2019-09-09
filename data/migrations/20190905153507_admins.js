
exports.up = function(knex) {
    return knex.schema.createTable('admins', admins => {
        admins.increments('adminId');
        admins.integer('affiliateId')
                .notNullable()
                .unsigned()
                .references('affiliateId')
                .inTable('affiliates')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        admins.integer('userId')
                .notNullable()
                .unsigned()
                .references('userId')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        admins.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("admins");
};
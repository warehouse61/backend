
exports.up = function(knex) {
    return knex.schema.createTable('categories', categories => {
        categories.increments();
        categories.string('category')
        categories.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("categories");
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('news', function(table){
    table.increments();
    table.text('image');
    table.text('title');
    table.text('summary');
    table.text('author');
    table.text('category'); 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('news');
};

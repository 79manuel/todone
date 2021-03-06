
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tasks').insert({category: 'e', content: 'eat sushi', date: '2017-06-21', user_id:'y'}),
        knex('tasks').insert({category: 'e', content: 'have lamb chop', date: '2017-06-21',user_id:'x'}),
        knex('tasks').insert({category: 'r', content: 'learn bookmark', date: '2017-06-21',user_id:'y'}),
        knex('tasks').insert({category: 'e', content: 'drink wine', date: '2017-06-21',user_id:'y'}),
        knex('tasks').insert({category: 'r', content: 'read Vancouver Sun', date: '2017-06-21',user_id:'x'}),
        knex('tasks').insert({category: 'w', content: 'watch Master of None', date: '2017-06-21',user_id:'y'}),
        knex('tasks').insert({category: 'w', content: 'see a horror film', date: '2017-06-21',user_id:'x'}),
        knex('tasks').insert({category: 'w', content: 'see a romance movie', date: '2017-06-21',user_id:'y'}),
        knex('tasks').insert({category: 'r', content: 'find good articles', date: '2017-06-21',user_id:'x'}),
        knex('tasks').insert({category: 'w', content: 'Youtube cat videos', date: '2017-06-21',user_id:'y'}),
        knex('tasks').insert({category: 'r', content: 'read Moby Dick', date: '2017-06-21',user_id:'x'}),
        knex('tasks').insert({category: 'b', content: 'get a bmw', date: '2017-06-21',user_id:'y'}),
        knex('tasks').insert({category: 'b', content: 'buy slippers', date: '2017-06-21',user_id:'x'}),
        knex('tasks').insert({category: 'w', content: 'watch CNN', date: '2017-06-21',user_id:'y'}),
        knex('tasks').insert({category: 'b', content: 'get a bottle of wine', date: '2017-06-21',user_id:'x'}),
        knex('tasks').insert({category: 'b', content: 'get a bmw', date: new Date(),user_id:'o'}),
        knex('tasks').insert({category: 'w', content: 'watch night movie', date: new Date(),user_id:'o'}),
        knex('tasks').insert({category: 'r', content: 'read about biology', date: new Date(),user_id:'o'}),
        knex('tasks').insert({category: 'e', content: 'have a bottle of wine', date:new Date(),user_id:'o'}),
      ]);
    });
};

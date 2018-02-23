const {MongoClient, ObjectID} = require('mongodb');

var database_name = 'TodoApp';
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, client) => {
	if(err){
		return console.log('cannot connect to database');
	}

	console.log('Connect to mongodb successfully.');
  	const db = client.db(database_name);
	// ------------------------------------------------------

	// var obj = {completed: false};
	// var obj = {_id: ObjectID('5a8fec717ef3db13630833a2') };
	// db.collection('Todos').find(obj).toArray().then((docs) =>{
	// 	console.log(JSON.stringify(docs, undefined , 2));
	// },(err) => {
	// 	return console.log('Unable to fetch ',err);
	// });

	// ------------------------------------------------------

	// db.collection('Todos').find().count().then((count) =>{
	// 	console.log('Todos count '+count);
	// },(err) => {
	// 	return console.log('Unable to fetch ',err);
	// });

	// ------------------------------------------------------

	db.collection('Users').find({name: 'todo'}).toArray().then((docs) =>{
		console.log(JSON.stringify(docs, undefined , 2));
	},(err) => {
		return console.log('Unable to fetch ',err);
	});
	// ------------------------------------------------------

	client.close();
});

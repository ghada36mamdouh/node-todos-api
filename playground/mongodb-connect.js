// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var database_name = 'TodoApp';
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, client) => {
	if(err){
		return console.log('cannot connect to database');
	}

	console.log('Connect to mongodb successfully.');
  	const db = client.db(database_name);
	// ------------------------------------------------------
	// db.collection('Todos').insertOne({text: 'new todo', completed: false}, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert ',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined , 2));
	// });
	// ------------------------------------------------------
	// db.collection('Users').insertOne({name: 'todo', age: 23, location: 'October'}, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert ',err);
	// 	}
	// 	// console.log(JSON.stringify(result.ops, undefined , 2));
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });
	// ------------------------------------------------------

	client.close();
});


// -----------

// var user = {name: 'andrew', age:23};
// var {name} = user ;
// console.log(name);
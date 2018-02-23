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

	// var obj = {_id: ObjectID('5a8fec717ef3db13630833a2') };
	// var obj = {text: 'buy new pens'};

	// db.collection('Todos').deleteOne(obj).then((res) =>{
	// 	console.log(res);
	// });

	// db.collection('Todos').deleteMany(obj).then((res) =>{
	// 	console.log(res);
	// });


	// var obj = {completed: true};
	// db.collection('Todos').findOneAndDelete(obj).then((res) =>{
	// 	console.log(res);
	// });

	// ------------------------------------------------------

	var obj = {name: 'todo'};

	// db.collection('Users').deleteMany(obj).then((res) =>{
	// 	console.log(res);
	// });


	var obj = {_id: ObjectID("5a901068439f0f13e6b07d77") };
	db.collection('Users').findOneAndDelete(obj).then((res) =>{
		console.log(res);
	});

	// ------------------------------------------------------

	client.close();
});

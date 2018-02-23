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

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5a900f30439f0f13e6b07cea')
	// },{
	// 	$set:{
	// 		completed: true
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((res) => {
	// 	console.log(res);
	// })

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a8feebffa1c9313bb2dd5f4')
	},{
		$set:{name: 'dod' },
		$inc: {age: 1 }
	},{
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	})

	// ------------------------------------------------------

	client.close();
});

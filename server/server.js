var express = require('express');
var bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/Todo');
const {User} = require('./models/User');


var app = express();

app.use(bodyParser.json());
app.post('/todos' ,(req,res) => {
	// console.log(req.body);
	var todo = new Todo({
		text: req.body.text
	})

	todo.save().then((docs)=>{
		res.send(docs);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.listen(3000, ()=>{
	console.log('work on port 3000');
});


// var newTodo = new Todo({
// 	text: "     move      "
// });

// newTodo.save().then((docs)=>{
// 	console.log(docs);
// },(e)=> {
// 	console.log(e);
// });


// var newUser = new User({
// 	email: 'new '
// });
// newUser.save().then((res)=>{
// 	console.log(res);
// });
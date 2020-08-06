const express = require('express');
const bodyParser = require('body-parser');

let items = [
	'Buy Food',
	'Cook Food',
	'Eat Food'
];

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
	let today = new Date();
	let currentDay = today.getDay();
	let day = '';
	const dayName = [
		'Sunday',
		'Monday',
		'Tueday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	const options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long'
	};
	day = today.toLocaleDateString('en-US', options);
	res.render('list', { kindOfDay: day, newListItem: items });
});

app.post('/', (req, res) => {
	item = req.body.newItem;
	items.push(item);
	res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server has Started....');
});

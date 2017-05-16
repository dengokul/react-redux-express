import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import users from './routes/users';
import auth from './routes/auth';

let app = express();

app.use(bodyParser.json());
app.use(cors()); 

app.use('/api/users', users);
app.use('/api/auth', auth);

app.use((req, res) => {
	res.status(404).json({
		errors: {
			global: "Page Not Found."
		}
	});
});

app.listen(8080, () => console.log('Running on localhost:8080'));
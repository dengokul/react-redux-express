import express from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import connection from '../config/db.js';
const USERS = 'cf_users';

let router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  User.query({
    where: { username: username },
    orWhere: { email: username }
  }).fetch().then(user => {
    if (user) {
      if (bcrypt.compareSync(password, user.get('password'))) {
        const token = jwt.sign({
          id: user.get('id'),
          email: user.get('email')
        }, config.jwtSecret);
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials' } });
    }
  });
});

router.get('/socialLoginUserExists/:identifier', (req, res) => {
  var qry = connection.query("SELECT id FROM " + USERS + " WHERE is_deleted = 0 AND (email = '" + req.params.identifier + "')", function (err, result, fields) {
      if (err) {
        res.status(500).json({ errors: { global: "Something went wrong" }});
      } else {
        res.json({ user:result[0] });
      }
  });
});

router.post('/generateToken', (req, res) => {
  const token = jwt.sign({
          id: req.body.id,
          email: req.body.email
        }, config.jwtSecret);
  res.json({ token });
});

export default router;
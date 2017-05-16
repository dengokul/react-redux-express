import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';

import User from '../models/user';
import connection from '../config/db.js';
const USERS = 'cf_users';
let router = express.Router();

function userValidate(data) {
  let errors = {};
  if (data.username === '') errors.username = "Can't be empty";
  if (data.email === '') errors.email = "Can't be empty";
  const isValid = Object.keys(errors).length === 0
  return { errors, isValid };
}

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return User.query({
    where: { email: data.email },
    orWhere: { username: data.username }
  }).fetch().then(user => {
    if (user) {
      if (user.get('username') === data.username) {
        errors.username = 'There is user with such username';
      }
      if (user.get('email') === data.email) {
        errors.email = 'There is user with such email';
      }
    }

    return {
      errors,
      isValid: isEmpty(errors)
    };
  })

}

/*router.get('/:identifier', (req, res) => {
  User.query({
    select: [ 'username', 'email' ],
    where: { email: req.params.identifier },
    orWhere: { username: req.params.identifier }
  }).fetch().then(user => {
    res.json({ user });
  });
});*/

router.get('/userExists/:identifier', (req, res) => {
  var qry = connection.query("SELECT * FROM " + USERS + " WHERE is_deleted = 0 AND (email = '" + req.params.identifier + "' OR username = '" + req.params.identifier + "')", function (err, result, fields) {
      if (err) {
        res.status(500).json({ errors: { global: "Something went wrong" }});
      } else {
        res.json({ user:result[0] });
      }
  });
});

router.get('', (req, res) => {
  connection.query("SELECT * FROM " + USERS + " WHERE is_deleted = 0", function (err, result, fields) {
      res.json({ users:result });
  });
});

router.get('/:id', (req, res) => {
  connection.query("SELECT * FROM " + USERS + " WHERE is_deleted = 0 AND id = " + req.params.id, function (err, result, fields) {
      if (err) {
        res.status(500).json({ errors: { global: "Something went wrong" }});
      } else {
        res.json({ user:result[0] });
      }
  });
});

router.delete('/:id', (req, res) => {
  var fldData  = {
        is_deleted: 1
      };
  connection.query("UPDATE " + USERS + " SET ? WHERE id = " + req.params.id, fldData, function(err, result) {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong" }});
        } else {
          res.json({ user: result });
        }
      });
});

router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      var userData  = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
      };
      connection.query("INSERT INTO " + USERS + " SET ?", userData, function(err, result) {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong" }});
        } else {
         res.json({ success: true });
        }
      });

    } else {
      res.status(500).json(errors);
    }
  });
});

router.put('/:id', (req, res) => {
  const { errors, isValid } = userValidate(req.body);

  if (isValid) {
    const { email, username } = req.body;

    var fldData  = {
        email: email,
        username: username
      };
      connection.query("UPDATE " + USERS + " SET ? WHERE id = " + req.params.id, fldData, function(err, result) {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong" }});
        } else {
          res.json({ user: result });
        }
      });

  } else {
    res.status(400).json({ errors });
  }
});


export default router;

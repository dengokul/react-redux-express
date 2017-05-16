import express from 'express';
let router = express.Router();

import connection from '../config/db.js';

function validate(data) {
  let errors = {};
  if (data.title === '') errors.title = "Can't be empty";
  if (data.cover === '') errors.cover = "Can't be empty";
  const isValid = Object.keys(errors).length === 0
  return { errors, isValid };
}
// Cat section
router.get('/api/v1/cats123', (req, res) => {
  connection.query("SELECT * FROM cats", function(error, results, fields) {
    var cats = results;
    res.json({
      cats
    });
  });
});
router.get('/api/v1/cats/:id', (req, res) => {
  connection.query("SELECT * FROM cats Where id = " + req.params.id, function(error, result, fields) {
    var cat = result;
    res.json({
      cat
    });
  });
});
router.get('/api/v1/hobbies', (req, res) => {
  connection.query("SELECT * FROM cats", function(error, results, fields) {
    var cats = results;
    res.json({
      cats
    });
  });
});

export default router;
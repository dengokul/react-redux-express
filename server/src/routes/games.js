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

router.get('', (req, res) => {
      connection.query("SELECT * FROM games", function (error, results, fields) {
        var games = results;
        res.json({ games });
      });
  });

router.post('', (req, res) => {
  const { errors, isValid } = validate(req.body);
  if (isValid) {
    const { title, cover } = req.body;
    var fldData  = {
        title: title,
        cover: cover
      };
    connection.query("INSERT INTO games SET ?", fldData, function(err, result) {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong" }});
        } else {
          res.json({ game: result });
        }
      });

  } else {
    res.status(400).json({ errors });
  }
});

router.put('/:id', (req, res) => {
  const { errors, isValid } = validate(req.body);

  if (isValid) {
    const { title, cover } = req.body;

    var fldData  = {
        title: title,
        cover: cover
      };
      connection.query("UPDATE games SET ? WHERE id = " + req.params.id, fldData, function(err, result) {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong" }});
        } else {
          res.json({ game: result });
        }
      });

  } else {
    res.status(400).json({ errors });
  }
});

router.get('/:id', (req, res) => {
   connection.query("SELECT * FROM games Where id = " + req.params.id, function (error, result, fields) {
      var game = result;
      res.json({ game });
    });
});

 router.delete('/:id', (req, res) => {
   connection.query("DELETE FROM games Where id = " + req.params.id, function (error, result, fields) {
      res.json({ });
    });
});

export default router;
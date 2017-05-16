import express from 'express';
import multer from 'multer';
import fs from 'fs-extra';

import connection from '../config/db.js';

const router = express.Router();
function validate(data) {
  let errors = {};
  if (data.article_name === '') errors.article_name = "Can't be empty";
  if (data.article_type === '') errors.article_type = "Can't be empty";
  const isValid = Object.keys(errors).length === 0
  return { errors, isValid };
}

router.get('', (req, res) => {
    connection.query("SELECT * FROM articles", function (error, results, fields) {
      res.json({ articles:results });
    });
});

router.post('', (req, res) => {
  const { errors, isValid } = validate(req.body);
  if (isValid) {
    const { data } = req.body;
    var fldData  = {
        article_name: data.article_name,
        article_type: data.article_type
      };
    connection.query("INSERT INTO articles SET ?", fldData, function(err, result) {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong" }});
        } else {
          var fldData  = {
                article_image: 'articles/' + result.insertId + '/' + data.file_name
              };
          connection.query("UPDATE articles SET ? WHERE id = " + result.insertId, fldData, function(err, result) {
          });
          res.json({ article: result });
        }
      });

  } else {
    res.status(400).json({ errors });
  }
});

router.put('/:id', (req, res) => {
  const { errors, isValid } = validate(req.body);

  if (isValid) {
    const { data } = req.body;
    var fldData  = {
        article_name: data.article_name,
        article_type: data.article_type
      };
      if(data.file_name) {
        fldData.article_image = 'articles/' + req.params.id + '/' + data.file_name;
      }
      connection.query("UPDATE articles SET ? WHERE id = " + req.params.id, fldData, function(err, result) {
        if (err) {
          res.status(500).json({ errors: { global: "Something went wrong" }});
        } else {
          res.json({ article: result });
        }
      });

  } else {
    res.status(400).json({ errors });
  }
});

router.get('/:id', (req, res) => {
   connection.query("SELECT * FROM articles Where id = " + req.params.id, function (error, result, fields) {
      var article = result;
      res.json({ article });
    });
});

router.delete('/:id', (req, res) => {
   connection.query("DELETE FROM articles Where id = " + req.params.id, function (error, result, fields) {
    if (!error) {
      let path = '../public/files/articles/' + req.params.id;
      rmDir(path, true);
       res.json({ });
    }
    });
});

function rmDir(dirPath, removeSelf) {
  if (removeSelf === undefined)
    removeSelf = true;
  try { var files = fs.readdirSync(dirPath); }
  catch(e) { return; }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        rmDir(filePath);
    }
  if (removeSelf)
    fs.rmdirSync(dirPath);
};

/*================ Upload process begin ================*/
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
      let path = '../public/files/articles/' + req.body.upload_id;
      fs.mkdirsSync(path);
      rmDir(path, false);
      callback(null, path);
    },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

var upload = multer({storage: storage}).single('file');

router.post('/upload', function(request, response) {
  upload(request, response, function(err) {
  if(err) {
    console.log('Error Occured');
    return;
  }
  response.send(JSON.parse(request.body.insData));
  })
});
/*================= Upload process end =================*/
export default router;
`use strict`

const express = require('express');
const app = express();

app.get('/article/*', (req,res) => {
  const tail = req.path.substring('/article/'.length);
  res.redirect(`https://basd4g.hatenablog.com/entry/${tail}`);
  res.end();
});

app.get('/*', (req,res) => {
  res.redirect(`https://basd4g.hatenablog.com`);
  res.end();
})

app.listen(3000, () => console.log('listening on port 3000'));

const express = require ("express");
const app = express();


var loremIpsum = require('lorem-ipsum')
  , output     = loremIpsum();

app.use(express.static('public'));

app.get("/lorem", function(req, res) {

  output = loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    format: 'html',
  });

  res.send(output);
});

app.listen(3000, function() {
  console.log("thisWorks");
});

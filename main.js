const express = require ("express");
const app = express();


var loremIpsum = require('lorem-ipsum');


var output = loremIpsum({
  count:3
  ,units: 'paragraphs'
  ,sentenceLowerBound: 5
  ,sentenceUpperBound: 15
  ,paragraphLowerBound: 3
  ,paragraphUpperBound: 7
  ,format: 'html'
});



app.get("/lorem", function(req, res) {


  res.send(output);
});

app.listen(3000, function() {
  console.log("thisWorks");
});

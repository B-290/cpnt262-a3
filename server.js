const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname,'./public')));
app.use(function(request, response) {
  response.send('custom: 404');
  
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
})
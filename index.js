const express = require('express');
const cors = require('cors');

const app = express();

// 👇️ configure CORS
app.use(cors());


const PORT = 41783;

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});

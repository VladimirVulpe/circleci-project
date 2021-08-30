const express = require('express');
const app = express();

app.use(express.static('./dist/circleci-project'));

app.listen(process.env.PORT || 8080);
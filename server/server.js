const express = require('express');
const { apiRouter } = require('./api');
const { useCors, useApiRoutes, useBodyParser } = require('./middlewares/');
const { PORT } = require('./configs/env.config');

const app = express();

require('./configs/mongoose.config');

useCors(app);
useBodyParser(app);
useApiRoutes(app, apiRouter);

app.listen(PORT, () => {
  console.log(`SERVER STATUS ...... LISTENING ON PORT ${PORT}`);
});

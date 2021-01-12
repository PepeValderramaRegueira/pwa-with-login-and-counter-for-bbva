const express = require('express');
const { apiRouter } = require('./api');
const { useCors, useApiRoutes } = require('./middlewares/');
const { PORT } = require('./configs/env.config');

const app = express();

useCors(app);
useApiRoutes(app, apiRouter);

app.listen(PORT, () => {
  console.log(`SERVER STATUS ...... LISTENING ON PORT ${PORT}`);
});

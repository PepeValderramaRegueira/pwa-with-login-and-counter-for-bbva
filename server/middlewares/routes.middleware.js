const useApiRoutes = (app, apiRouter) => {
  app.use('/', apiRouter);
}

module.exports = {
  useApiRoutes
}

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.page);
  router.get('/news', controller.news.list);
}
module.exports = app => {
  const { router, middlewares,controller } = app;
  router.get('/', controller.home.page);
  router.get('/news', controller.news.list);
  router.get('/users', controller.userInfo.index);
  router.post('/login', controller.login.login);
}
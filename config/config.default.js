exports.keys = 'admin=asdfghjkl'

// 添加view配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
};

// 添加news的配置
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
};

// 添加middleware robot
exports.middleware = [
  'robot'
];

exports.robot = {
  ua: [
    /Baiduspider/i
  ]
}
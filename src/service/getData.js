import fetch from '../config/fetch'


/**
 * 首页
 */

export const menu = () => fetch('/menu.json');

/**
 * 首页
 */

export const home = () => fetch('/home.json');

/**
 * 关于我们
 */

export const about = (aboutId) => fetch('/about.json', {
  aboutId
});

/**
 * 联系我们
 */

export const contact = () => fetch('/contact.json');

/**
 * 新闻动态
 */

export const news = (newsId) => fetch('/news.json',{
  newsId
});

/**
 * 经常课程
 */

export const curriculum = (curriculumId) => fetch('/curriculum.json',{
  curriculumId
});

/**
 * 招贤纳士
 */

export const recruit = (recruitId) => fetch('/recruit.json',{
  recruitId
});


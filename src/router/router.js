import App from '../App';

const home = r => require.ensure([], () => r(require('../page/home')), 'home');
const about = r => require.ensure([], () => r(require('../page/about')), 'about');
const appointment = r => require.ensure([], () => r(require('../page/appointment')), 'appointment');
const news = r => require.ensure([], () => r(require('../page/news')), 'news');
const curriculum = r => require.ensure([], () => r(require('../page/curriculum')), 'curriculum');
const recruit = r => require.ensure([], () => r(require('../page/recruit')), 'recruit');
const contact = r => require.ensure([], () => r(require('../page/contact')), 'contact');
const search = r => require.ensure([], () => r(require('../page/search')), 'search');
const error = r => require.ensure([], () => r(require('../page/error')), 'error');

export default [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [ //二级路由。对应App.vue
          //地址为空时跳转home页面
          {
              path: '',
              redirect: '/home'
          },
          //首页
          {
              path: '/home',
              component: home
          },
          //关于我们
          {
              path: '/about',
              component: about
          },
          //新闻动态
          {
              path: '/news',
              component: news
          },
          //精彩课程
          {
              path: '/curriculum',
              component: curriculum
          },
          //招纳贤士
          {
              path: '/recruit',
              component: recruit
          },
          //联系我们
          {
              path: '/contact',
              component: contact
          }
      ]
    },
    //预约页面
    {
      path: '/appointment',
      component: appointment
    },
    //联系我们
    {
      path: '/search',
      component: search
    },
    //错误页面
    {
      path: '/*',
      component: error
    }
]

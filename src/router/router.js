import App from '../App';

const home = r => require.ensure([], () => r(require('../page/home')), 'home');
const about = r => require.ensure([], () => r(require('../page/about')), 'about');
const appointment = r => require.ensure([], () => r(require('../page/appointment')), 'appointment');
const news = r => require.ensure([], () => r(require('../page/news')), 'news');
const newsDetail = r => require.ensure([], () => r(require('../page/newsDetail')), 'newsDetail');
const curriculum = r => require.ensure([], () => r(require('../page/curriculum')), 'curriculum');
const curriculumDetail = r => require.ensure([], () => r(require('../page/curriculumDetail')), 'curriculumDetail');
const recruit = r => require.ensure([], () => r(require('../page/recruit')), 'recruit');
const contact = r => require.ensure([], () => r(require('../page/contact')), 'contact');
const recruitDetail = r => require.ensure([], () => r(require('../page/recruitDetail')), 'recruitDetail');
const recruitApply = r => require.ensure([], () => r(require('../page/recruitApply')), 'recruitApply');
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
          //在线招聘
          {
            path: '/recruitApply',
            component: recruitApply
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
    //新闻动态详情
    {
      path: '/newsDetail',
      component: newsDetail
    },
    //招纳贤士详情
    {
      path: '/recruitDetail',
      component: recruitDetail
    },
    //精彩课程详情
    {
      path: '/curriculumDetail',
      component: curriculumDetail
    },
    //错误页面
    {
      path: '/*',
      component: error
    }
]

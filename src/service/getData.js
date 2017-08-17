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

export const about = () => fetch('/about.json');

/**
 * 联系我们
 */

export const contact = () => fetch('/contact.json');


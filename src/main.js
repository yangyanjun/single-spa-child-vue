import Vue, { h } from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
const appOptions = {
  el: '#vue', // 挂载到父应用中的id为vue的标签中
  router,
  render: h => h(App)
}
// 我们需要父应用加载子应用
// bootstrap  mount unmount 
// single-spa / single-spa-vue 可以协助生成以上三个生命周期
const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions,
});
// 如果是父应用引用我
if(window.singleSpaNavigate) {
  __webpack_public_path__ = 'http://localhost:10000/'
}
// 单独启用
if(!window.singleSpaNavigate) {
  delete appOptions.el;
  new Vue(appOptions).$mount('#app');
}


// 协议接入 我定好了协议 父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;

// 我们需要父应用加载子应用，所以需要将子应用打包成一个个的lib去给父应用使用
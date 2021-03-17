import { EventEmitter } from './utils';

App({
  onLaunch() {
    // App 活跃于整个支付宝小程序的生命周期内
    // 可以用于跨页面数据和方法共享等
    this.eventEmitter = new EventEmitter();
  },
});

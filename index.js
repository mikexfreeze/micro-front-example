import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'reactApp',
    entry: '/subapp/react17',
    container: '#container',
    activeRule: '/react17',
  },
  {
    name: 'angularApp',
    entry: '/subapp/angular9',
    container: '#container',
    activeRule: '/angular9',
  },
]);
// 启动 qiankun
start();
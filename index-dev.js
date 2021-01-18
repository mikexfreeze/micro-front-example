import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/react17',
  },
  {
    name: 'angular9',
    entry: '//localhost:4200',
    container: '#container',
    activeRule: '/angular9',
  },
]);
// 启动 qiankun
start();
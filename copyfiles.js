var copyfiles = require('copyfiles');
 
copyfiles(["react17/build/**/*", "dist/subapp/react17"], 2, function(res){
  console.log('拷贝 subapp 完毕')
});
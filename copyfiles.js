var copyfiles = require('copyfiles');
 
copyfiles([
  "react17/build/**/*", 
  "dist/subapp/react17"
], 2, function(res){
  console.log('拷贝 react17 subapp 完毕')
});

copyfiles([
  "angular9/dist/**/*", 
  "dist/subapp/angular9"
], 2, function(res){
  console.log('拷贝 subapp angular9 dist')
});

copyfiles([
  "angular9/dist/assets/**/*", 
  "dist/assets/"
], 3, function(res){
  console.log('拷贝 subapp angular9 dist')
});
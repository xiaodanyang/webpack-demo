webpack搭建vue项目，不使用vue-cli

修改vendor打包的内容，比如demo1，需要重新运行 npm run vendor 才能生效

执行npm run vendor后，'[name]_[hash]会发生变化，导致需要重新 npm run dev


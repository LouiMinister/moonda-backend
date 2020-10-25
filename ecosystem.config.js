module.exports =  {
  apps : [
    {
      name: "moonda-restapi",
      script: "./app.js",
      watch: true,
      interpreter: "node_modules/@babel/node/bin/babel-node.js",
      instance: 0,
      exec_mode: 'cluster',
      listen_timeout: 50000
    }
  ]
}
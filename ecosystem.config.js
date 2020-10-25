module.exports =  {
  apps : [
    {
      name: "moonda-restapi",
      script: "./server-register.js",
      watch: true,
      instance: 0,
      exec_mode: 'cluster',
      listen_timeout: 50000
    }
  ]
}
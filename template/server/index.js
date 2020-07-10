const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const app = express()
module.exports = { path: '/api', handler: app }

async function start() {
  consola.ready({
    message: `Starting server`,
    badge: true
  })

  // Body Parser
  app.use( bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  
  var routes = require("./api/routes/index");
  routes(app);
}

start()

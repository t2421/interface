var osc = require('node-osc');

var client = new osc.Client('127.0.0.1', 3333);
client.send('/oscAddress', 200, function () {
  //client.kill();
});

client.send('/oscAddress2', 300, function () {
  //client.kill();
});
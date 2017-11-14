var osc = require('node-osc');

var oscServer = new osc.Server(3333, '0.0.0.0');

oscServer.on("message", function (msg, rinfo) {     
      if(msg[0] == "/oscAddress"){
      	console.log("message oscAdress");
      }

      if(msg[0] == "/oscAddress2"){
      	console.log("message oscAdress2");	
      }
});
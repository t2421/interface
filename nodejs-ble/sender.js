var bleno = require('bleno');

var name = 'bleno-nodejs';
var serviceUuids = ['ttttttttttkkkkkkkkkk'];

bleno.startAdvertising(name, serviceUuids,function(error){
  console.log("oooo");
});
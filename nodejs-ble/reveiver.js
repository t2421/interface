var noble = require('noble');

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
  console.log(state);
});

noble.on('discover', function(peripheral) {
	var uuid = peripheral.uuid;
	var localName = peripheral.advertisement.localName;

	if (localName =="MESH-100BU1002065") {
	    noble.stopScanning();       // <= ここで一旦SCANを止める
	    //cnt ++;
	     
	    setTimeout(function() {
	      //connect_hvcc(peripheral);
	    }, 1000);
	  }

  // if(true){

    

    // peripheral.discoverAllServicesAndCharacteristics(function(error, services, characteristics){
    //   console,log(characteristics);
    //   console.log("hoge")
    // });

  //   if(peripheral.advertisement.localName == "MESH-100BU1002065"){
  //   	console.log('peripheral discovered (' + peripheral.id +
  //               ' with address <' + peripheral.address +  ', ' + peripheral.addressType + '>,' +
  //               ' connectable ' + peripheral.connectable + ',' +
  //               ' RSSI ' + peripheral.rssi + ':');
	 //    console.log('\thello my local name is:');
	 //    console.log('\t\t' + peripheral.advertisement.localName);
	 //    console.log('\tcan I interest you in any of the following advertised services:');
	 //    console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));

	 //    var serviceData = peripheral.advertisement.serviceData;
	 //    if (serviceData && serviceData.length) {
	 //      console.log('\there is my service data:');
	 //      for (var i in serviceData) {
	 //        console.log('\t\t' + JSON.stringify(serviceData[i].uuid) + ': ' + JSON.stringify(serviceData[i].data.toString('hex')));
	 //      }
	 //    }
	 //    if (peripheral.advertisement.manufacturerData) {
	 //      console.log('\there is my manufacturer data:');
	 //      console.log('\t\t' + JSON.stringify(peripheral.advertisement.manufacturerData.toString('hex')));
	 //    }
	 //    if (peripheral.advertisement.txPowerLevel !== undefined) {
	 //      console.log('\tmy TX power level is:');
	 //      console.log('\t\t' + peripheral.advertisement.txPowerLevel);
	 //    }	
	 //    console.log(peripheral);

	 //    peripheral.connect(function(e){
	 //      console.log("connect");
	 //    });
  //   }
    
  // }


  

//   console.log();

});


noble.on('scanStart', function(e){
  console.log(e);
});
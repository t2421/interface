const dgram = require('dgram');

const sendData = [
    {"name":"taiga","type":"enginner"},
    {"name":"taiga2","type":"enginner2"}
]

const message = Buffer.from(JSON.stringify(sendData));

const client = dgram.createSocket('udp4');
client.send(message, 41234, 'localhost', (err) => {
  client.close();
});
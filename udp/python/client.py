import socket
import json

jsonString = '''
{
    "name": "あああ",
    "age": 30
}
'''
data = json.loads(jsonString)

client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
client.connect(("127.0.0.1",41234))
client.send(jsonString.encode())

response = client.recv(4096) 
print(response)
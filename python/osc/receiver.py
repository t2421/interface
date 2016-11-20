# -*- coding: utf-8 -*-

import argparse
import math

from pythonosc import dispatcher
from pythonosc import osc_server

def print_volume_handler(unused_addr, args, volume):
  print("[{0}] ~ {1}".format(args[0], volume))


if __name__ == "__main__":
　　##引数でportやipを指定する
  parser = argparse.ArgumentParser()
  parser.add_argument("--ip",
      default="127.0.0.1", help="The ip to listen on")
  parser.add_argument("--port",
      type=int, default=5005, help="The port to listen on")
  args = parser.parse_args()


  ## oscで受け取った値の処理
  dispatcher = dispatcher.Dispatcher()
  dispatcher.map("/filter", print)
  dispatcher.map("/volume", print_volume_handler, "Volume")


  ## サーバー起動
  server = osc_server.ThreadingOSCUDPServer(
      (args.ip, args.port), dispatcher)
  print("Serving on {}".format(server.server_address))
  server.serve_forever()
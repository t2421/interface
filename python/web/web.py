# -*- coding: utf-8 -*-
import json
import falcon


class IndexResource(object):
	def on_get(self,req,resp):
		msg = {
			"message" : "Welcom to the Falcon"
		}
		resp.body = json.dumps(msg);


class HelloResource(object):
	def on_get(self,req,resp):
		msg = {
			"message" : "Hello user"
		}
		resp.body = json.dumps(msg);


app = falcon.API()
app.add_route("/",IndexResource())
app.add_route("/hello",HelloResource())


if __name__ == "__main__":
	from wsgiref import simple_server
	httpd = simple_server.make_server("127.0.0.1",8000,app)
	httpd.serve_forever()
import ray
from ray import serve
import requests
import time
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

ray.init()
# serve.start()
serve.start(
    http_middlewares=[
        Middleware(
            CORSMiddleware, allow_origins=["*"], allow_methods=["*"])
    ])
'''
serve.start(http_options={"http_middlewares": [Middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'])]})    
'''
@serve.deployment
# class Simple:
class simples:
  def __init__(self):
      self.count = 0

  def __call__(self):
      return {"x": 1}

simples.deploy()

while True:
    time.sleep(5)
    print(serve.list_deployments())
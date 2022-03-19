import ray
from ray import serve
import requests
'''
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

serve.start(
    http_options={"http_middlewares": [Middleware(CORSMiddleware, 
      allow_origins=['*'],
      allow_methods=['*'])]})
'''

from fastapi import FastAPI
app = FastAPI()
ray.init(address="auto", namespace="simples")
serve.start(detached=True)


@serve.deployment
@serve.ingress(app)
class Simple:
  def __init__(self):
      self.count = 0

  @app.get("/xs")
  def xs(self):
      return {"x": 1}

  @app.get("/r1")
  def incr(self):
      self.count += 10
      return {"count": self.count}

  @app.get("/r2")
  def incr(self):
      self.count += 20
      return {"count": self.count}

  @app.get("/pod")
  def incr(self):
      self.count += 30
      return {"count": self.count}      

Simple.deploy()
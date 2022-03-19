import ray
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ray import serve

app = FastAPI()
origins = [
    "http://localhost",  
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

ray.init(address="auto", namespace="backendx")
serve.start(detached=True)

@app.get("/")
def health_check():
    return "health check."

'''
@app.get("/simples")
async def simples():
    return {"x": 1}

@app.get("/predict")
async def predict():
    return {"y": 2}    
'''

@serve.deployment(route_prefix="/api1")
@serve.ingress(app)
class Model1:
    @app.get("/predict")
    def method(self):
        return "Predict 1!"

@serve.deployment(route_prefix="/api2")
@serve.ingress(app)
class Model2:
    @app.get("/predict")
    def double(self, x: int):
        return 2 * x

    def method(self, x: int):
        return "Predict 2! y: " + double(x)

Model1.deploy()
Model2.deploy()

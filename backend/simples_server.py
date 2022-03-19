import ray
from ray import serve
import time

serve.start()

# NA.
# NOTE: AG3, just start very simple and iterate on something so you can learn productively
# - https://docs.ray.io/en/latest/serve/deployment.html
@serve.deployment
def simples(request):
  '''
    NOTE: frontend may be expecting something like:
      let dataTemplate1 = {
          x: xs,
          y: ys,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
      };

      let dataTemplate2 = { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] };`
  '''
  '''
  e.g.,
  json = {
        x: [1, 2, 3],
        y: [2, 5, 3],
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' }
    }
  '''
  return "{x:1}" 

simples.deploy()

while True:
    time.sleep(5)
    print(serve.list_deployments())
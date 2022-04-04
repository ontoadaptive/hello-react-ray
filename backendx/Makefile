help:
	@echo make env
	@echo make install
	@echo ""
	@echo make start-cluster
	@echo make stop-cluster
	@echo make start-server
	@echo make deploy1
	@echo ""
	@echo make run
	@echo make test
	@echo make all
	@echo ""
	@echo make clean

env:
	python3 -m venv venv

install:
	python3 -m pip install --upgrade pip
	pip install -r requirements.txt

start-cluster:
	ray start --head

stop-cluster:
	ray stop

stop: stop-cluster

clean:
	rm -fr venv

run: stop-cluster start-cluster
	python3 main.py
	
	# NA.
	# NOTE: AG3. This is even more optimistic case.  Take it further.
	# python3 iris_ml_server.py	

	# NA. Remove to just focus on predict 3
	# @echo health check 1
	# curl -X GET -H "Origin: http://localhost" http://localhost:8000/api1/
	# @echo ""
	# @echo health check 2
	# curl -X GET -H "Origin: http://localhost" http://localhost:8000/api2/			
	# @echo ""
	# @echo predict 1
	# curl -X GET -H "Origin: http://localhost" http://localhost:8000/api1/predict
	# @echo ""
	# @echo predict 2
	# curl -X GET -H "Origin: http://localhost" http://localhost:8000/api2/predict?x=1
	# @echo ""
test:
	@echo predict 3
	curl -X GET http://localhost:8000/api3/predict?x=1	
	@echo ""

all: run test

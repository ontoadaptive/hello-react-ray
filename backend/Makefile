help:
	@echo make env
	@echo make install
	@echo ""
	@echo make start-cluster
	@echo make stop-cluster
	@echo make start-server
	@echo ""
	@echo make run
	@echo make test
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
	# NA.
	# NOTE: AG3. Study different implementations and bring those thoughts into Logical Architecture
	# - what are the different components, benefits, risks, tradeoffs
	# NOTE: AG3. This is expected case.
	uvicorn main:app --reload

	# NA.
	# NOTE: AG3. This is pessimistic case.
	# python3 simples_server.py	
	# python3 more_simple.py

test:
	curl -X GET -H "Origin: http://localhost" http://localhost:8000/simples

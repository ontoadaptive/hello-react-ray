help:
	@echo make env
	@echo make install
	@echo ""
	@echo make start-cluster
	@echo make stop-cluster
	@echo make start-server
	@echo make deploy1
	@echo make deploy2
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

run:
	python3 simples_server.py

run2:
	python3 more_simple.py

start-cluster:
	ray start --head

stop-cluster:
	ray stop

stop: stop-cluster

curl:
	curl -H "Origin: http://localhost" http://localhost:8000/simples

test:
	python3 test_request.py

clean:
	rm -fr venv

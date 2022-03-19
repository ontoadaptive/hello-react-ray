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

start-cluster:
	ray start --head

stop-cluster:
	ray stop

stop: stop-cluster

clean:
	rm -fr venv

run:
	# NA.
	# NOTE: AG3. This is expected case.
	# python3 simples_server.py
	uvicorn main:app --reload

	# NA.
	# NOTE: AG3. This is optimistic case.  Take it further.
	# python3 iris_ml_server.py

	# NA.
	# NOTE: AG3. This is pessimistic case.
	# python3 more_simple.py

curl:
	curl -X GET -H "Origin: http://localhost" http://localhost:8000/simples

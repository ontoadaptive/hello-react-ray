help:
	@echo make install
	@echo make format-check
	@echo make format
	@echo make lint
	@echo make run

install:
	yarn install

format-check:
	yarn prettier --check "src/**/*.js"

format:
	yarn prettier --write "src/**/*.js"

lint:
	yarn eslint

run:
	yarn dev

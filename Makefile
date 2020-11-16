#!make
BASE_SERVICE = my_task
BASE_COMPOSE = docker-compose -f docker-compose.yml
BASE_COMPOSE_DEV = $(BASE_COMPOSE) -f docker-compose-dev.yml

run:
	docker-compose build
	@ $(BASE_COMPOSE) up

develop:
	docker-compose build
	@ $(BASE_COMPOSE_DEV) up -d
	@ $(BASE_COMPOSE_DEV) exec $(BASE_SERVICE) bash || true
	@ $(BASE_COMPOSE_DEV) stop
	@ $(BASE_COMPOSE_DEV) down

test:
	docker-compose build
	@ $(BASE_COMPOSE_DEV) up -d
	@ $(BASE_COMPOSE_DEV) exec $(BASE_SERVICE) yarn test || true
	@ $(BASE_COMPOSE_DEV) stop
	@ $(BASE_COMPOSE_DEV) down

.PHONY: run \
develop
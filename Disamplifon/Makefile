ifeq ($(shell test -d /nfs/homes/ && echo -n yes),yes)
COMPOSE = /nfs/homes/$(USER)/sgoinfre/bin/docker-compose
else
COMPOSE = docker-compose
endif

all: build

build:
	@echo "\e[32m MECHO init...\e[0m"
	@sleep 1
	$(COMPOSE) up -d --build

down:
	$(COMPOSE) down
up:
	$(COMPOSE) up -d

reup: down up

clean: down
	docker system prune -a --volumes -f

re: clean all

shelldj:
	@docker exec -it django /bin/bash 2>/dev/null || true

shelldb:
	@docker exec -it postgresql /bin/bash 2>/dev/null || true

shellgx:
	@docker exec -it nginx /bin/bash 2>/dev/null || true

.PHONY: all up down clean re shelldj shelldb shellgx reup
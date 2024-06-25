# docker run -p 3000:3000 andurar-fe
run:
	@echo Running next app
	docker compose -f docker-compose.yml up

build:
	@echo Running a build version
	npm run build

docker-build:
	@echo Building Docker-image 
	docker build . -t $(name) \
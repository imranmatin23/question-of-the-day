.PHONY: help

help: ## Describes each Makefile target
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

### Frontend

run-frontend: ## Run frontend web server in developement mode with Docker Compose
	cd frontend; \
	docker-compose up -d --build; \
	cd ../

stop-frontend: ## Stops the frontend web server with Docker Compose
	cd frontend; \
	docker-compose down; \
	cd ../

logs-frontend: ## Prints the last 100 lines of the running Docker container
	cd frontend; \
	docker-compose logs frontend --tail 100;\
	cd ../

deploy-infra-frontend: ## Deploy backend infrastructure
	cd infra/frontend; \
	terraform plan -var-file prod.tfvars; \
	terraform apply -auto-approve -input=false -var-file prod.tfvars; \
	cd ../..

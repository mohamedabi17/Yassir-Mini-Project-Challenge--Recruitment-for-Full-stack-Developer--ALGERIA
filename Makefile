# Define variables
NODE = node
NPM = npm
DOCKER = docker
APP_NAME = biometric-time-clock-app
PORT = 3000

# Targets

# Install project dependencies
setup:
	$(NPM) install

# Start the Node.js application
start:
	$(NODE) app.js

# Run tests for your project
test:
	$(NPM) test

# Build a Docker image
docker-build:
	$(DOCKER) build -t $(APP_NAME) .

# Run a Docker container
docker-run:
	$(DOCKER) run -p $(PORT):$(PORT) -d $(APP_NAME)

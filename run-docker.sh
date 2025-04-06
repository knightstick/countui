#!/bin/bash

# Build the Docker image
docker build -t countui-app .

# Run the Docker container
docker run --rm -it countui-app
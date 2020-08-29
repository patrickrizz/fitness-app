#!/bin/bash

git pull & docker rmi -f fitness-app & docker-compose up -d
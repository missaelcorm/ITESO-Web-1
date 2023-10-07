# Homeworks and Exercises of my course of Web Applications Development 1

## Container for development
This container helps me to run my web applications and test it out in my host using a python HTTP Server and a port forwarding.

`docker-compose.yml`:
```yml
version: '2'
services:
  nodejs:
    image: node:18
    volumes:
      - .:/WEB
    ports:
      - "8080:8080"
      - "3000:3000"
    stdin_open: true 
    tty: true
    command: ["python3", "-m", "http.server", "-d", "/WEB", "3000"]
```

Run `docker-compose.yml` file:
```
docker compose up -d
```

Stop the container:
```
docker compose stop
```

Start the container:
```
docker compose start
```
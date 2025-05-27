# FOOD | DIET ELIMINATION DIET

TODO DESC

## Development

```
pnpm dev
```

## Production - Build docker images

- Frontend

```
docker build -t web -f apps/web/Dockerfile .
```

- Backend

```
docker build -t server -f apps/server/Dockerfile .
```

### Run containers

```
docker run <docker-tag>
```

### Shell into container

```
docker run --rm -it --entrypoint sh <docker-tag>
```

### Use Turbo caching for bulding

```
docker build -t <docker-tag> -f <docker-file-location> . --no-cache --build-arg TURBO_TEAM=<env> TURBO_TOKEN=<env>
```

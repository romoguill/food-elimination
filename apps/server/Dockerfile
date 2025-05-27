FROM node:lts-alpine AS pruner
WORKDIR /app
RUN npm i -g turbo
COPY . .
RUN turbo prune --scope=server --docker

FROM node:lts-alpine AS installer
WORKDIR /app
COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN npm i -g pnpm
RUN pnpm i --frozen-lockfile

FROM node:lts-alpine AS builder
WORKDIR /app
COPY --from=installer /app .
COPY --from=pruner /app/out/full .
RUN npm i -g pnpm
RUN pnpm run build

FROM node:lts-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app .

CMD ["node", "apps/server/dist/main"]
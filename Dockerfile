# Stage: build
FROM node:16-alpine as build

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

# Build the app, prune dev dependencies, delete sources
COPY . ./
RUN pnpm build && rm -rf src && pnpm prune --prod

# Stage: run
FROM node:16-alpine

WORKDIR /app

COPY --from=build /app ./

CMD ["npm", "start"]

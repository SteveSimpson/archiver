FROM node:24-alpine AS base-dev
COPY ./api/ /app
WORKDIR /app
RUN npm ci

FROM node:24-alpine AS build-dev
COPY ./api/ /app/
COPY --from=base-dev /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM build-dev AS api-dev
WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host"]

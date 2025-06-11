FROM node:24-alpine AS base-dev
COPY ./ui/ /app
WORKDIR /app
RUN npm ci

FROM node:24-alpine AS build-dev
COPY ./ui/ /app/
COPY --from=base-dev /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM build-dev AS ui-dev
WORKDIR /app
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

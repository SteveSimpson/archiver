FROM node:24-alpine AS development-dependencies-env
COPY ./viewer/ /app
WORKDIR /app
RUN npm ci

FROM node:24-alpine AS production-dependencies-env
COPY ./viewer/package.json ./viewer/package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:24-alpine AS build-env
COPY ./viewer/ /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:24-alpine AS viewer
COPY ./viewer/package.json ./viewer/package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["npm", "run", "start"]

FROM build-env AS viewer-dev
WORKDIR /app
CMD ["npm", "run", "dev", "--", "--host"]

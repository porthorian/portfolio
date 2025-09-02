FROM node:24.7-alpine AS builder

WORKDIR /workspace

COPY src ./src
COPY assets ./assets
COPY index.html package-lock.json package.json tsconfig.json vite.config.js .eslintrc.js ./
RUN npm install
RUN npm run build

FROM nginx:stable-alpine-slim
WORKDIR /

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /workspace/dist /usr/share/nginx/html/.
COPY --from=builder /workspace/assets/Vincent-Marone-Resume.pdf /usr/share/nginx/html/assets/

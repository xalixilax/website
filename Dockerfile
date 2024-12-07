FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
ARG WORKSPACE
WORKDIR /app
COPY . .
RUN mkdir -p /clients/${WORKSPACE}
RUN cp ./clients/${WORKSPACE}/.env.local /clients/${WORKSPACE}/.env
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm --filter ${WORKSPACE}... install --frozen-lockfile
RUN pnpm --filter ${WORKSPACE} exec vite build 

FROM nginx:stable-alpine as prod
ARG WORKSPACE
COPY --from=build /app/clients/${WORKSPACE}/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
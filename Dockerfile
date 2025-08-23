# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # Vite outputs to /app/dist

# Runtime stage
FROM nginx:1.27-alpine AS runtime
RUN addgroup -S web && adduser -S web -G web

# Copy our main nginx.conf (overrides image default)
COPY nginx.conf /etc/nginx/nginx.conf

# Site files
COPY --from=build /app/dist /usr/share/nginx/html

# Ensure writable dirs for non-root (some modules expect these)
RUN mkdir -p /var/cache/nginx /var/run && \
    chown -R web:web /usr/share/nginx/html /var/cache/nginx /var/run

USER web
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

FROM oven/bun:1-alpine
WORKDIR /app
COPY package*.json bun.lock ./
RUN bun install
COPY . .
RUN bun run build
EXPOSE 8080
CMD ["bun", "run", "preview", "--port", "8080", "--host"]

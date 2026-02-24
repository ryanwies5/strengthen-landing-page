# Stage 1: Build the Vite project
FROM oven/bun:latest as builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Stage 2: Serve the application
FROM oven/bun:latest
WORKDIR /app
RUN bun add -g serve
COPY --from=builder /app/dist ./dist
ENV PORT=8080
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:8080"]

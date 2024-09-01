FROM oven/bun:1 as builder
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

FROM oven/bun:1
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
EXPOSE 3003
CMD ["vite", "preview", "--port", "3003", "--host", "0.0.0.0"]

# 1️⃣ Builder 阶段
FROM node:20-slim AS builder

WORKDIR /app

# 安装依赖
COPY package.json package-lock.json ./
RUN npm install

# 拷贝源代码
COPY . .

# 构建 Next.js 项目
RUN npm run build

# 2️⃣ Production 阶段
FROM node:20-slim AS runner

WORKDIR /app

# 只复制必要的文件
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]

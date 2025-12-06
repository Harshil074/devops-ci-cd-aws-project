# 1. Base image (Node ka ready-made environment)
FROM node:18-alpine

# 2. Container ke andar ka working folder
WORKDIR /usr/src/app

# 3. Sirf package files copy karo
COPY package*.json ./

# 4. Dependencies install karo (production ke liye)
RUN npm install --only=production

# 5. Baaki saare source code copy karo
COPY . .

# 6. App ka port expose karo (jo tumne index.js me use kiya hai)
EXPOSE 3000

# 7. Container start hote hi yeh command chalegi
CMD ["node", "index.js"]

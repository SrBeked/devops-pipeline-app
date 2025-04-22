# Dockerfile
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos al contenedor
COPY package*.json ./
COPY backend ./backend
COPY frontend ./frontend

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]

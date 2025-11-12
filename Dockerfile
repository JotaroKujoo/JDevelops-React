# Imagen base
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto del servidor de desarrollo (por defecto Vite usa 5173)
EXPOSE 5173

# Comando por defecto
CMD ["npm", "run", "dev", "--", "--host"]
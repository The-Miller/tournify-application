# # Étape 1 : Construire l'application React avec Vite
# FROM node:18 AS build

# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Étape 2 : Servir avec Nginx
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf 
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# Étape 1 : Build
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serve via Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Copie de la config Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

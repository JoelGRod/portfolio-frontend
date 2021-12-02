FROM node:16.13.1 AS build
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.4
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
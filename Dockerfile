
FROM node as build
WORKDIR /app


COPY package.json ./

RUN yarn
COPY public public
COPY src src 

RUN yarn run build

# production environment
FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
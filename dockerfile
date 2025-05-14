# declare the base image
FROM nginx:alpine

#set a work directory
WORKDIR /usr/share/nginx/htm

#Copy files
COPY . .

#expose nginx port
EXPOSE 80

#Command
CMD ["nginx", "-g", "daemon off;"]
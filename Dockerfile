FROM node
RUN mkdir -p /home/tugerente
WORKDIR /home/tugerente
COPY . .
WORKDIR ./backend
RUN npm install
#EXPOSE 3306
CMD npm run dev
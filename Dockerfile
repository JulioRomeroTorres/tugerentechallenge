FROM node
RUN mkdir -p /home/tugerente
WORKDIR /home/tugerente
COPY . .
WORKDIR ./backend
RUN npm install
EXPOSE 3000
CMD npm run dev
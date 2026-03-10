FROM node:20-bullseye AS prod
WORKDIR /app
# create group and user
# set ownership and permission
RUN groupadd -r dockeruser && useradd -g dockeruser dockeruser \
  && chown -R dockeruser:dockeruser /app \
  && mkdir /home/dockeruser \
  && chown -R dockeruser:dockeruser /home/dockeruser

# switch user
USER dockeruser

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "prod"]
FROM node:14.15.0 as my-task

RUN mkdir /home/cn

ENV HOME=/home/cn
COPY ./ $HOME

ENV PATH="${HOME}/node_modules/.bin:${PATH}"

WORKDIR $HOME

RUN "yarn"
CMD ["yarn", "start"]

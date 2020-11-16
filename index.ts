import { getApp } from './lib';

getApp().listen(parseInt(process.env.PORT as string, 10), () =>
  console.log(`started at port ${process.env.PORT}`)
);

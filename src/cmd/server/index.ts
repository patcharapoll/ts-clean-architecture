import 'reflect-metadata';

import express from 'express';
import Container from 'typedi';
import UserController from '../../internal/controllers/UserController';

const main = async () => {
  const app = express();

  const userController = Container.get(UserController);

  app.get('/users', (req, res) => userController.getAllUsers(req, res));

  app.listen(6070, () => {
    console.log('Server started');
  });
};

main().catch(err => {
  console.error(err);
});

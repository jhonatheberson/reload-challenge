import express from 'express'; // sucrase allows this kind of import
import routes from './routes';

/**
 * Class App that starts Node builders, with express
 *
 */
class App {
  constructor() {
    // this method is constructor is called
    // automatically when calling the App class
    this.server = express();

    this.middlewares();
    this.routes();
  }
  // constructor middlewares
  middlewares() {
    this.server.use(express.json());
  }
  // constructor routes
  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server; without sucrase it looks like this!
export default new App().server;

import User  from './src/models/User'; // Replace with the actual user interface file

declare module 'express-serve-static-core' {
  interface Request {
    user?: typeof User; // Replace with the actual user interface or type
  }
}

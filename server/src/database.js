import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
class Database {
  static connect() {
    mongoose
      .connect(process.env.DATABASE, { useNewUrlParser: true })
      .then(() => {
        Database.status = true;
        console.log('Database Connection Successful');
      })
      .catch(err => {
        Database.status = 'false';
        console.error(`Database Connection Error ${err}`);
      });
  }
}

export default Database;

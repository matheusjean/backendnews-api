import * as mongoose from 'mongoose';

class DataBase {
  // private DB_URL = 'mongodb://localhost:27017/db_portal';
  private DB_URL =
    'mongodb+srv://matheusjean:teti10grboy@cluster0.rsmpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

  createConection() {
    mongoose.connect(this.DB_URL);
  }
}

export default DataBase;

import * as mongoose from 'mongoose';

class DataBase {
  private DB_URL = 'mongodb://localhost:27017/db_portal';

  createConection() {
    mongoose.connect(this.DB_URL);
  }
}

export default DataBase;

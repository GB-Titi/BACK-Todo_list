import mongoose from 'mongoose';

class MongooseConnection {
  private static instance: MongooseConnection;
  private _connection: typeof mongoose;

  private constructor() {
    this._connection = mongoose;
  }

  public static getInstance(): MongooseConnection {
    if (!MongooseConnection.instance) {
      MongooseConnection.instance = new MongooseConnection();
    }

    return MongooseConnection.instance;
  }

  public async connect(uri: string, options: mongoose.ConnectOptions): Promise<typeof mongoose> {
    if (!this._connection.connection.readyState) {
      await this._connection.connect(uri, options);
    }
    return this._connection;
  }
}

export default MongooseConnection;
import { MongoMemoryServer } from 'mongodb-memory-server';
import MongooseConnection from './mongoose-connection';

export async function createMongoMemoryConnection() {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  const mongooseConnection = MongooseConnection.getInstance();

  await mongooseConnection.connect(uri, {
    dbName: 'todo-db',
  });

  return { connection: mongooseConnection, mongod };
}
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect(); //This command is asynchronous, it needs to go to the database to actually connect, so we use await at the beginning and async when declaring the function
  const result = await client.query(queryObject);
  await client.end();
  return result;
}
export default {
  query: query,
};

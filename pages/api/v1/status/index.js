import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1+1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "são acima da media" });
}
export default status;
//request its about bringing something from outside
// response its about what we want respond to outside

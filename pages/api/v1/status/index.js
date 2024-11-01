function status(request, response) {
  response.status(200).json({ chave: "são acima da media" });
}

export default status;

//request its about bringing something from outside
// response its about what we want respond to outside

const usuarios = document.getElementById("usuarios")


async function pegarUsuario() {
  try {
    const resposta = await fetch(`https://reqres.in/api/users`)
    if (!resposta.ok) {
      throw new Error("Erro ao buscar usuario");
    }

    const dados = await resposta.json() 
    const usuario = dados.data

    usuario.forEach(indice => {
      const div = document.createElement("div")
      div.innerHTML = `
         <img src="${indice.avatar}" alt="avatar">
         <h1>${indice.first_name} ${indice.last_name} </h1>
         <p>${indice.email}</p>
         <hr>
      `
      usuarios.appendChild(div)
    });

  } catch (error) {
    console.log(error.message)
  }
}

pegarUsuario()
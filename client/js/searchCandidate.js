const input = document.querySelector('.search input')
const cards = document.querySelector('.cards')

input.addEventListener('input', async () => {
  let search = {
    name: input.value
  }
  let data = await postNameCadidante(search)

  cards.innerHTML = ''
  data.map((elem) => {
    cards.insertAdjacentHTML('afterbegin', 
    `<div class="card">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgw5sLEmsI8btij-vcxhkucE1jB4jeWBboyF_JM4jCh6RFjiBewHvaVwNNSY1GGS49ITCebzMYstoqt5BgnAIDM3dJGlZdVfc9-hjJPbsPNZZKbG-mxBsD7hSME0xwjU-ByakA3ASxrwlxj5zc3MAtRvsIFobFMd1zK-XjTent28-1b4iIDMYuGggXtab_n/s320/pessoa%20(1).png">
      <h3>${elem.nome}</h3>
      <p><b>Cargo:</b> ${elem.cargo}</p>
      <p><b>Votos:</b> ${elem.votacao}</p>
      <p><b>Status:</b> ${elem.status}</p>
    </div>`); 
  })

  if (input.value == '') {
    cards.innerHTML = ''
  }
})

async function postNameCadidante(search) {
  return await fetch('http://localhost:3000/candidato', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(search)
  })
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

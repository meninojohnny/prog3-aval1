const select = document.querySelector('.search select')
const cards = document.querySelector('.cards')

select.addEventListener('input', async () => {
  let search = { role: select.value }

  let data = await postRole(search)
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
})

async function postRole(search) {
  return await fetch('http://localhost:3000/cargo', {
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
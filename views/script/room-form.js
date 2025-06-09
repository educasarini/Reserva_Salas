// Ao submeter o formulário de Sala, envia um POST para /rooms
document.querySelector('#roomForm').addEventListener('submit', async e => {
  e.preventDefault();
  // transforma os inputs do form em um objeto { name, location }
  const body = Object.fromEntries(new FormData(e.target));
  // envia para o backend
  const res = await fetch('/rooms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  // exibe mensagem de sucesso ou erro
  document.getElementById('roomMsg').innerText = res.ok
    ? 'Sala criada com sucesso!'
    : 'Erro ao criar sala.';
});

// Ao submeter o formulário de Cliente, envia um POST para /clients
document.querySelector('#clientForm').addEventListener('submit', async e => {
  e.preventDefault();
  // transforma os inputs do form em um objeto { name, email }
  const body = Object.fromEntries(new FormData(e.target));
  // envia para o backend
  const res = await fetch('/clients', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  // exibe mensagem de sucesso ou erro
  document.getElementById('clientMsg').innerText = res.ok
    ? 'Cliente criado com sucesso!'
    : 'Erro ao criar cliente.';
});

// client-form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#clientForm');
  if (!form) return;  // sai se não houver #clientForm nessa página

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const isEdit = !!data.id;
    const url    = isEdit
      ? `/api/clients/${data.id}`
      : '/api/clients';
    const method = isEdit ? 'PUT' : 'POST';
    if (isEdit) delete data.id;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    document.getElementById('clientMsg').innerText = res.ok
      ? isEdit ? 'Cliente atualizado!' : 'Cliente criado!'
      : 'Erro ao processar.';
    if (res.ok) window.location = '/clients';
  });
});

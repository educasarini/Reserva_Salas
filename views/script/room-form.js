// room-form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#roomForm');
  if (!form) return;  // sai se não houver #roomForm nessa página

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const isEdit = !!data.id;
    const url    = isEdit
      ? `/api/rooms/${data.id}`
      : '/api/rooms';
    const method = isEdit ? 'PUT' : 'POST';
    if (isEdit) delete data.id;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    document.getElementById('roomMsg').innerText = res.ok
      ? isEdit ? 'Sala atualizada!' : 'Sala criada!'
      : 'Erro ao processar.';
    if (res.ok) window.location = '/rooms';
  });
});

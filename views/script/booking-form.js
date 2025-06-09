// booking-form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#bookingForm');
  if (!form) return;  // sai se não houver #bookingForm nessa página

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const isEdit = !!data.id;
    const url    = isEdit
      ? `/api/bookings/${data.id}`
      : '/api/bookings';
    const method = isEdit ? 'PUT' : 'POST';
    if (isEdit) delete data.id;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    document.getElementById('bookingMsg').innerText = res.ok
      ? isEdit ? 'Reserva atualizada!' : 'Reserva criada!'
      : 'Erro ao processar.';
    if (res.ok) window.location = '/bookings';
  });
});

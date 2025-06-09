// Ao submeter o formulário de Reserva, envia um POST para /bookings
document.querySelector('#bookingForm').addEventListener('submit', async e => {
  e.preventDefault();
  // transforma os inputs do form em um objeto { client_id, room_id, date, start_time, end_time }
  const body = Object.fromEntries(new FormData(e.target));
  // envia para o backend
  const res = await fetch('/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  // exibe mensagem de sucesso ou erro
  document.getElementById('bookingMsg').innerText = res.ok
    ? 'Reserva criada com sucesso!'
    : 'Erro ao criar reserva.';
});

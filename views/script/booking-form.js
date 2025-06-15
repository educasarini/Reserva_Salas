// booking-form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#bookingForm');
  if (!form) return;  // sai se não houver #bookingForm nessa página

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const isEdit = !!data.id;
    const url = isEdit
      ? `/api/bookings/${data.id}`
      : '/api/bookings';
    const method = isEdit ? 'PUT' : 'POST';
    
    // Para depuração
    console.log('Enviando dados da reserva:', { url, method, data });
    
    try {
      // Remover o ID do corpo da requisição para PUT
      const bodyData = isEdit ? { ...data } : data;
      if (isEdit) delete bodyData.id;
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });
      
      let responseData;
      try {
        responseData = await res.json();
      } catch (e) {
        responseData = { error: await res.text() || 'Resposta inválida do servidor' };
      }
      
      if (res.ok) {
        document.getElementById('bookingMsg').innerText = isEdit ? 'Reserva atualizada!' : 'Reserva criada!';
        console.log('Operação bem-sucedida:', responseData);
        setTimeout(() => window.location = '/bookings', 1000);
      } else {
        document.getElementById('bookingMsg').innerText = `Erro: ${responseData.error || 'Falha ao processar'}`;
        console.error('Erro na resposta:', responseData);
      }
    } catch (error) {
      document.getElementById('bookingMsg').innerText = `Erro: ${error.message}`;
      console.error('Erro na requisição:', error);
    }
  });
});

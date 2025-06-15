// booking-form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#bookingForm');
  if (!form) return;  // sai se não houver #bookingForm nessa página

  // Definir data padrão como hoje se for um novo formulário
  const dateInput = document.getElementById('date');
  if (dateInput && !dateInput.value) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    
    // Validar o formulário antes de enviar
    const clientId = form.querySelector('#client_id').value.trim();
    const roomId = form.querySelector('#room_id').value.trim();
    const date = form.querySelector('#date').value.trim();
    const startTime = form.querySelector('#start_time').value.trim();
    const endTime = form.querySelector('#end_time').value.trim();
    const status = form.querySelector('#status').value.trim();
    
    const msgElement = document.getElementById('bookingMsg');
    msgElement.style.display = 'block';
    
    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!clientId || !roomId || !date || !startTime || !endTime || !status) {
      msgElement.innerText = 'Erro: Todos os campos são obrigatórios';
      msgElement.className = 'form-message error';
      return;
    }
    
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
        msgElement.innerText = isEdit ? 'Reserva atualizada!' : 'Reserva criada!';
        msgElement.className = 'form-message success';
        console.log('Operação bem-sucedida:', responseData);
        setTimeout(() => window.location = '/bookings', 1000);
      } else {
        msgElement.innerText = `Erro: ${responseData.error || 'Falha ao processar'}`;
        msgElement.className = 'form-message error';
        console.error('Erro na resposta:', responseData);
      }
    } catch (error) {
      msgElement.innerText = `Erro: ${error.message}`;
      msgElement.className = 'form-message error';
      console.error('Erro na requisição:', error);
    }
  });
});

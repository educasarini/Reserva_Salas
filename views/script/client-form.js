// client-form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#clientForm');
  if (!form) return;  // sai se não houver #clientForm nessa página

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const isEdit = !!data.id;
    const url = isEdit
      ? `/api/clients/${data.id}`
      : '/api/clients';
    const method = isEdit ? 'PUT' : 'POST';
    
    // Para depuração
    console.log('Enviando dados do cliente:', { url, method, data });
    
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
        document.getElementById('clientMsg').innerText = isEdit ? 'Cliente atualizado!' : 'Cliente criado!';
        console.log('Operação bem-sucedida:', responseData);
        setTimeout(() => window.location = '/clients', 1000);
      } else {
        document.getElementById('clientMsg').innerText = `Erro: ${responseData.error || 'Falha ao processar'}`;
        console.error('Erro na resposta:', responseData);
      }
    } catch (error) {
      document.getElementById('clientMsg').innerText = `Erro: ${error.message}`;
      console.error('Erro na requisição:', error);
    }
  });
});

// views/script/app.js

document.addEventListener('DOMContentLoaded', () => {
  const p = window.location.pathname;
  if (p === '/clients')  loadList('/api/clients',  'clientsTable');
  if (p === '/rooms')    loadList('/api/rooms',    'roomsTable');
  if (p === '/bookings') loadList('/api/bookings', 'bookingsTable');
});

async function loadList(url, tableId) {
  const res  = await fetch(url);
  const data = await res.json();
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = '';

  data.forEach(item => {
    const tr = document.createElement('tr');
    Object.values(item).forEach(v => {
      const td = document.createElement('td');
      td.innerText = v;
      tr.appendChild(td);
    });
    // adiciona a coluna de ações
    const tdA = document.createElement('td');
    tdA.innerHTML = `
      <button onclick="window.location='/${tableId.replace('Table','')}/${item.id}/edit'">✏️</button>
      <button onclick="deleteItem('${tableId}', '${item.id}')">🗑️</button>
    `;
    tr.appendChild(tdA);
    tbody.appendChild(tr);
  });
}

async function deleteItem(tableId, id) {
  if (!confirm('Confirma exclusão?')) return;
  
  const endpoint = {
    clientsTable: '/api/clients',
    roomsTable:   '/api/rooms',
    bookingsTable:'/api/bookings'
  }[tableId];
  
  if (!endpoint) {
    console.error('Endpoint não encontrado para tableId:', tableId);
    alert('Erro: tipo de tabela inválido');
    return;
  }
  
  console.log('Deletando:', { tableId, endpoint, id });
  
  try {
    const res = await fetch(`${endpoint}/${encodeURIComponent(id)}`, { 
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    let responseData;
    try {
      responseData = await res.json();
    } catch (e) {
      responseData = { error: await res.text() || 'Resposta inválida do servidor' };
    }
    
    if (res.ok) {
      console.log('Exclusão bem-sucedida:', responseData);
      alert('Item excluído com sucesso!');
      loadList(endpoint, tableId);
    } else {
      console.error('Erro ao excluir:', responseData);
      alert(`Erro ao excluir: ${responseData.error || `Status ${res.status}`}`);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert('Erro na requisição: ' + error.message);
  }
}

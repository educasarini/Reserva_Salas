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
      <button onclick="deleteItem('${tableId}', ${JSON.stringify(item.id)})">🗑️</button>
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

  const res = await fetch(`${endpoint}/${encodeURIComponent(id)}`, { method: 'DELETE' });
  if (res.ok) {
    loadList(endpoint, tableId);
  } else {
    alert('Erro ao excluir.');
  }
}
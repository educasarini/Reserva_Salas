document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  if (path === '/clients')  loadList('/api/clients',  'clientsTable');
  if (path === '/rooms')    loadList('/api/rooms',    'roomsTable');
  if (path === '/bookings') loadList('/api/bookings', 'bookingsTable');
});

async function loadList(url, propName) {
  const res  = await fetch(url);
  const data = await res.json();
  const tbody = document.querySelector('table tbody');
  tbody.innerHTML = '';
  data.forEach(item => {
    const tr = document.createElement('tr');
    Object.values(item).forEach(val => {
      const td = document.createElement('td');
      td.innerText = val;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

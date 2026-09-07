async function fetchUsers() {
  const response = await fetch('http://localhost:3000/users');
  const users = await response.json();
  
  const list = document.getElementById('user-list');
  list.innerHTML = users.map(user => `
    <div class="user-card">
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    </div>
  `).join('');
}
fetchUsers();
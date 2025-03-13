const articles = [];
let isLoggedIn = false;

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === 'admin' && password === 'nidavellir') {
    isLoggedIn = true;
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'grid';
    loadStatistics();
    loadArticles();
    loadUsers();
  } else {
    document.getElementById('loginError').textContent = 'Identifiants incorrects';
  }
}

function loadStatistics() {
  const visitorsCount = document.getElementById('visitorsCount');
  const articlesCount = document.getElementById('articlesCount');
  const usersCount = document.getElementById('usersCount');
  
  if (visitorsCount) visitorsCount.textContent = Math.floor(Math.random() * 1000);
  if (articlesCount) articlesCount.textContent = articles.length;
  if (usersCount) usersCount.textContent = Math.floor(Math.random() * 100);
}

function createNewArticle() {
  const newArticle = {
    id: Date.now().toString(),
    title: 'Nouvel Article',
    content: 'Contenu de l\'article...',
    tags: [],
    category: 'Général',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString()
  };
  articles.push(newArticle);
  loadArticles();
}

function loadArticles() {
  const articleList = document.getElementById('articleList');
  if (articleList) {
    articleList.innerHTML = articles.map(article => `
      <div class="article-card">
        <div class="article-header">
          <h3>${article.title}</h3>
          <div class="article-meta">
            <span class="category">${article.category}</span>
            <span class="date">${article.updatedAt}</span>
          </div>
          <div class="article-actions">
            <button onclick="editArticle('${article.id}')">✏️</button>
            <button onclick="deleteArticle('${article.id}')">🗑️</button>
          </div>
        </div>
        <div class="article-content" id="content-${article.id}">${article.content}</div>
        <div class="article-tags">
          ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

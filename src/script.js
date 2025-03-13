// Fonctionnalités de recherche
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Rechercher dans le wiki...';
searchInput.classList.add('search-bar');
document.querySelector('header').appendChild(searchInput);

// Animation de recherche
searchInput.addEventListener('focus', () => {
  searchInput.style.width = '300px';
  searchInput.style.transition = 'width 0.3s ease';
});

searchInput.addEventListener('blur', () => {
  searchInput.style.width = '200px';
});

// Fonction de recherche
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const content = section.textContent.toLowerCase();
    if (content.includes(searchTerm)) {
      section.style.display = 'block';
      section.style.animation = 'highlight 0.5s ease';
    } else {
      section.style.display = 'none';
    }
  });
});

// Animation de surbrillance
const style = document.createElement('style');
style.textContent = `
@keyframes highlight {
  0% { background-color: rgba(184, 134, 11, 0); }
  50% { background-color: rgba(184, 134, 11, 0.3); }
  100% { background-color: rgba(184, 134, 11, 0); }
}
`;
document.head.appendChild(style);

// Gestion des sections modifiables
document.querySelectorAll('section').forEach(section => {
  const editButton = document.createElement('button');
  editButton.textContent = '✎ Modifier';
  editButton.classList.add('edit-btn');
  section.appendChild(editButton);

  editButton.addEventListener('click', () => {
    const content = section.querySelector('p');
    const currentText = content.textContent;
    const textarea = document.createElement('textarea');
    textarea.value = currentText;
    content.replaceWith(textarea);
    
    const saveButton = document.createElement('button');
    saveButton.textContent = '💾 Enregistrer';
    saveButton.classList.add('save-btn');
    section.appendChild(saveButton);

    saveButton.addEventListener('click', () => {
      content.textContent = textarea.value;
      textarea.replaceWith(content);
      saveButton.remove();
    });
  });
});

// Animation de chargement
const loadingAnimation = document.createElement('div');
loadingAnimation.classList.add('loading-animation');
document.body.appendChild(loadingAnimation);

window.addEventListener('load', () => {
  loadingAnimation.style.display = 'none';
});

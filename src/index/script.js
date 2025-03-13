const categoryLinks = document.querySelectorAll('.sidebar a');
const categoryContents = document.querySelectorAll('.category-content');

categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.category;

        categoryContents.forEach(content => {
            content.classList.remove('active');
        });

        document.getElementById(category).classList.add('active');
    });
});
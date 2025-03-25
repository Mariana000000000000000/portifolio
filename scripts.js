document.addEventListener('DOMContentLoaded', () => {
    const projetos = document.querySelectorAll('.projeto');

    projetos.forEach(projeto => {
        projeto.addEventListener('mouseover', () => {
            projeto.style.backgroundColor = '#f0f0f0';
        });

        projeto.addEventListener('mouseout', () => {
            projeto.style.backgroundColor = 'white';
        });
    });
});

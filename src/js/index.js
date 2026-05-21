const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const baseUrl = 'https://api.github.com';

const handleSearch = async () => {
    const userName = inputSearch.value;

    if (userName) {
        profileResults.innerHTML = '<p class="loading">Carregando...</p>';
        try {
            const response = await fetch(`${baseUrl}/users/${userName}`);

            if (!response.ok) {
                alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
                profileResults.innerHTML = '';
                return;
            }

            const userData = await response.json();
            console.log(userData);

            profileResults.innerHTML = 
            `
                <div class="profile-card">
                    <img src="${userData.avatar_url}" alt="${userData.login}" class="profile-image">
                    <div class="profile-info">
                        <h2>${userData.name}</h2>
                        <p>${userData.bio || 'Não possui bio cadastrada.'}</p>
                    </div>
                </div>
            `

        } catch (error) {
            console.error('Erro ao buscar o perfil do GitHub:', error);
            alert('Ocorreu um erro ao buscar o perfil do GitHub. Por favor, tente novamente mais tarde.');
            profileResults.innerHTML = '';
        }
    } else {
        alert('Por favor, insira um nome de usuário do GitHub.');
        profileResults.innerHTML = '';
    }
};

btnSearch.addEventListener('click', handleSearch);

inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleSearch();
    }
});

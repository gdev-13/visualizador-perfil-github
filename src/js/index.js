import { inputSearch, btnSearch, renderProfile, renderLoading, clearResults, showAlert } from './dom.js';
import { fetchGitHubUser } from './api.js';

const handleSearch = async () => {
    const userName = inputSearch.value.trim();

    if (!userName) {
        showAlert('Por favor, insira um nome de usuário do GitHub.');
        clearResults();
        return;
    }

    renderLoading();

    try {
        const userData = await fetchGitHubUser(userName);
        renderProfile(userData);
    } catch (error) {
        console.error('Erro ao buscar o perfil do GitHub:', error);
        showAlert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        clearResults();
    }
};

btnSearch.addEventListener('click', handleSearch);

inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleSearch();
    }
});
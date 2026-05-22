export const inputSearch = document.getElementById('input-search');
export const btnSearch = document.getElementById('btn-search');
export const profileResults = document.querySelector('.profile-results');

export function renderLoading() {
    profileResults.innerHTML = '<p class="loading">Carregando...</p>';
}


export function renderProfile(userData, reposData) {
    const repositoriesHTML = reposData.length ? reposData.map(repo => `
        <div class="repository-card">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                <h3>${repo.name}</h3>
                <div class="repository-stats">
                    <span>⭐Stars: ${repo.stargazers_count}</span>
                    <span>🍴Forks: ${repo.forks_count}</span>
                    <span>👀Watchers: ${repo.watchers_count}</span>
                    <span>🧑‍💻Language: ${repo.language || 'N/A'}</span>
                </div>
            </a>
        </div>
    `).join('') : '<p>Nenhum repositório encontrado.</p>';

    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="${userData.login}" class="profile-image">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada.'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
        <div class="repositories-section">
            <h2>Repositórios</h2>
            <div class="repositories-list">
                ${repositoriesHTML}
            </div>
        </div>
    `;
}

export function clearResults() {
    profileResults.innerHTML = '';
}

export function showAlert(message) {
    alert(message);
}
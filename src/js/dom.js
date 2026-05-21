export const inputSearch = document.getElementById('input-search');
export const btnSearch = document.getElementById('btn-search');
export const profileResults = document.querySelector('.profile-results');

export function renderLoading() {
    profileResults.innerHTML = '<p class="loading">Carregando...</p>';
}

export function renderProfile(userData) {
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
    `;
}

export function clearResults() {
    profileResults.innerHTML = '';
}

export function showAlert(message) {
    alert(message);
}
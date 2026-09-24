document.addEventListener('DOMContentLoaded', function() {
    
    const username = 'Gabrieldsanto'; 
    const endpoint = `https://api.github.com/users/${username}`;

    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const user = document.querySelector('.profile-username');
    const repositories = document.querySelectorAll('.numbers-item')[0];
    const followers = document.querySelectorAll('.numbers-item')[1];
    const following = document.querySelectorAll('.numbers-item')[2];
    const link = document.querySelector('.profile-link');

    async function buscarDadosGithub() {
        try {
            const resposta = await fetch(endpoint);

            if (!resposta.ok) {
                throw new Error('Não foi possível carregar os dados do perfil.');
            }

            const json = await resposta.json();

            avatar.src = json.avatar_url;
            name.innerText = json.name || username;
            user.innerText = `@${json.login}`;
            
            repositories.innerHTML = `<h4>Repositórios</h4>${json.public_repos}`;
            followers.innerHTML = `<h4>Seguidores</h4>${json.followers}`;
            following.innerHTML = `<h4>Seguindo</h4>${json.following}`;

            link.href = json.html_url;
        } catch (erro) {
            alert(erro.message);
        }
    }

    buscarDadosGithub();
});
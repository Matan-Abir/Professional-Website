document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});


// GitHub repos
const githubUsername = "Matan-Abir";

fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then((response) => response.json())
    .then((repos) => {
        const githubGallery = document.getElementById("github-gallery");
        repos.forEach((repo) => {
            const repoCard = document.createElement("div");
            repoCard.className = "repo-card";
            repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided"}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
            githubGallery.appendChild(repoCard);
        });
    })
    .catch((error) => {
        console.error("Error fetching GitHub repos:", error);
    });

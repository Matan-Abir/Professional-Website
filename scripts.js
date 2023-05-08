// Shadow effect
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

document.addEventListener("mousemove", (event) => {
    // Only execute on non-mobile devices
    if (!isMobile()) {
        const panels = document.querySelectorAll(".panel");
        panels.forEach((panel) => {
            const rect = panel.getBoundingClientRect();
            const x = (event.clientX - rect.left) / panel.clientWidth - 0.5;
            const y = (event.clientY - rect.top) / panel.clientHeight - 0.5;
            const shadowSize = 20;
            panel.style.boxShadow = `${-x * shadowSize}px ${-y * shadowSize}px ${shadowSize}px rgba(0, 0, 0, 0.15)`;
        });
    }
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

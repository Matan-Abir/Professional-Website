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


// Tabs
let acc = document.getElementsByClassName("section-btn");
let i;

window.onload = function() {
    let workExperienceContent = document.getElementById("work-experience-content");
    workExperienceContent.style.maxHeight = workExperienceContent.scrollHeight + "px";
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // close all sections
        for (let j = 0; j < acc.length; j++) {
            if (acc[j] === this) continue;
            acc[j].classList.remove("active");
            let content = acc[j].nextElementSibling;
            content.style.maxHeight = null;
        }
        // open or close clicked section
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

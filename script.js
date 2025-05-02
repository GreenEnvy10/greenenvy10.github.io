const username = 'GreenEnvy10'; // your GitHub username
const list = document.getElementById('repo-list');

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos
      .filter(repo => repo.has_pages)
      .forEach((repo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="https://${username}.github.io/${repo.name}/" target="_blank">${repo.name}</a>`;
        list.appendChild(li);

        // Animate each list item with a delay
        setTimeout(() => {
          li.classList.add('visible');
        }, index * 100);
      });
  })
  .catch(err => {
    list.innerHTML = '<li>Failed to load repositories.</li>';
    console.error(err);
  });

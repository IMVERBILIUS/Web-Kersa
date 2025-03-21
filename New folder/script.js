const articleContent = document.querySelector(".article-content");

article.forEach((item) => {
  const articleItem = document.createElement("div");
  articleItem.classList.add("article-content-item");

  articleItem.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <div class="article-description">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `;

  articleContent.appendChild(articleItem);
});

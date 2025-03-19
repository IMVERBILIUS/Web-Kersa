window.onload = async function () {
  const loadArticles = async (url, targetElementId) => {
      const articleList = document.getElementById(targetElementId);

      try {
          const response = await fetch(url);
          const articles = await response.json();

          let htmlContent = "";
          for (let i = 0; i < articles.length; i += 3) {
              htmlContent += `
                  <div class="carousel-item ${i === 0 ? 'active' : ''}">
                      <div class="row">
              `;

              for (let j = i; j < i + 3 && j < articles.length; j++) {
                  htmlContent += `
                      <div class="col-md-4">
                          <a href="${articles[j].link}" class="text-decoration-none">
                              <div class="card">
                                  <img src="${articles[j].image}" class="card-img-top" alt="${articles[j].title}">
                                  <div class="article-description p-3">
                                      <h3>${articles[j].title}</h3>
                                      <p>${articles[j].description}</p>
                                  </div>
                              </div>
                          </a>
                      </div>
                  `;
              }

              htmlContent += `</div></div>`;
          }

          articleList.innerHTML = htmlContent;
      } catch (error) {
          console.error(`Gagal memuat data untuk ${targetElementId}:`, error);
          articleList.innerHTML = `<p class="text-danger">Gagal memuat artikel.</p>`;
      }
  };

  await loadArticles("articles.json", "article-list");
  await loadArticles("articles.json", "article-list-2");
};

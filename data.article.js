let articles = [
  {
    image: "image/taman-hutan-raya-juanda.jpg",
    title: "Taman Hutan Raya Juanda",
    description: "Destinasi wisata alam dengan keindahan hutan yang memikat.",
    link: "detail.html?id=1"
  },
  {
    image: "image/taman-hutan-raya-juanda.jpg",
    title: "Curug Dago",
    description: "Air terjun tersembunyi dengan suasana tenang dan asri.",
    link: "detail.html?id=2"
  },
  {
    image: "image/taman-hutan-raya-juanda.jpg",
    title: "Gunung Tangkuban Perahu",
    description: "Gunung berapi yang menawarkan pemandangan menakjubkan.",
    link: "detail.html?id=3"
  },
  {
    image: "image/taman-hutan-raya-juanda.jpg",
    title: "Kawah Putih",
    description: "Danau vulkanik dengan air berwarna putih kehijauan yang menakjubkan.",
    link: "detail.html?id=4"
  },
  {
    image: "image/taman-hutan-raya-juanda.jpg",
    title: "Tebing Keraton",
    description: "Pemandangan indah dari atas tebing di pagi hari.",
    link: "detail.html?id=5"
  },
  {
    image: "image/taman-hutan-raya-juanda.jpg",
    title: "Situ Patenggang",
    description: "Danau alami yang menawan di tengah perkebunan teh.",
    link: "detail.html?id=6"
  }
];
window.onload = function () {
  const articleList = document.getElementById("article-list");

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
};

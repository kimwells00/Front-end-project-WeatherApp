const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", () => returnNews());
async function returnNews() {
  const searchBox = document.querySelector("#searchBox").value;
  const newsResults = await fetch(
    `https://newsapi.org/v2/top-headlines?q=${searchBox}&apiKey=eee9539c0b804bb1ba30dd8082cb7279`
  );
  const json = await newsResults.json();
  console.log(json);
  const newsCard = document.getElementById("newsCard");
  newsCard.innerHTML = "";
  function newsInfo(array) {
    for (const news of json.articles) {
      const div = document.createElement("div");
      const author = document.createElement("h3");
      const description = document.createElement("h3");
      const title = document.createElement("h3");
      const url = document.createElement("a");
      const image = document.createElement("img");
      author.innerHTML = news.author;
      description.innerHTML = news.description;
      title.innerHTML = news.title;
      url.innerHTML = news.url;
      image.src = news.urlToImage;

      div.append(author, description, title, url, image);
      newsCard.append(div);
      console.log(newsCard);
    }
  }
  newsInfo(json.articles);
}

returnNews();

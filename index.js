// https://newsdata.io/api/1/latest?apikey=pub_52349b01964ce6ecebf7901f676187da81a26&category=health

async function getNews() {
    // const apiKey='pub_52349b01964ce6ecebf7901f676187da81a26';
    // const baseUrl='https://newsdata.io/api/1/latest';
    const baseUrl = "https://saurav.tech/NewsAPI/"
    // top_headlines_api = "<BASE_URL>/top-headlines/category/<category>/<country_code>.json"
    // const everything_api = "<BASE_URL>/everything/<source_id>.json"
    const top_headlines_api=`${baseUrl}top-headlines/category/health/in.json`;

    try {
        const response = await fetch(top_headlines_api,
            {
                method: 'GET'
            });

        const result = await response.json();
        console.log(result.articles);
        // totalResult = result.totalResults;
        // console.log(totalResult);

        let mainNews=``;
        let i =0;
        for(i=0;i<21;i++){
            mainNews += `
            <div class="card mx-2 my-2" style="width: 25rem;">
                <div class="card-body">
                <img src="${result.articles[i].urlToImage}" class="card-img-top" width="200" height="200" alt="...">
                <h6 class="card-title mb-2 my-2"><b>${result.articles[i].title.slice(0,40)}</b></h6>
                <h6 class="card-subtitle mb-2 text-muted"><b>publishedAt : </b> ${result.articles[i].pubDate}</h6>
                <h6 class="card-subtitle mb-2 text-muted"><b>Source : </b> ${result.articles[i].source.name}</h6>
                <p class="card-text">${result.articles[i].description.slice(0,150)}...</p>
                <a href="${result.articles[i].url}" class="btn btn-primary" target="_blank">News Link</a>
                </div>
            </div>
            `
            // console.log(result.results[i].title)
        }

    document.getElementById("placeToInsertArticles").innerHTML+=mainNews;


    } catch (error) {
        console.error('Error processing image:', error);
    }
}

// document.getElementById("fetchNews").addEventListener("click", getNews);
getNews();

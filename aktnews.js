const API_KEY = "cc9b69ca3a8c4217a1683e0ad077c28d";
const url = "https://newsapi.org/v2/everything?q=";


window.addEventListener('load', () => fetchNews("India"));

async function  fetchNews(query) {
   const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
   const data = await res.json();
   console.log(data);
}
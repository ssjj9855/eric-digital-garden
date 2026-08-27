async function initSearch(){

const pagefind = await import("/pagefind/pagefind.js");

await pagefind.init();


const input = document.getElementById("search-input");

const results = document.getElementById("results");


if(!input) return;


input.addEventListener("input", async()=>{


const value = input.value.trim();


if(!value){

results.innerHTML="";

return;

}


const search = await pagefind.search(value);


results.innerHTML="";


for(const item of search.results.slice(0,10)){


const data = await item.data();


results.innerHTML +=
"<article>" +
"<h2><a href='" +
data.url +
"'>" +
data.meta.title +
"</a></h2>" +
"<p>" +
data.excerpt +
"</p>" +
"</article>";


}


});


}


initSearch();
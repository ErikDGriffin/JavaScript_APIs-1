
const searchButton = document.querySelector("SubmitSearch");
const searchInput = document.querySelector("#searchWord");
const displayImg = docuemnt.querySelector("#imageContainer > img");
const mainElement = document.querySelector("main");
const feedbackP = document.createElement("P");
mainElement.appendChild(feedbackP);

    searchButton.addEventListener("click" , (event) => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${myApiKey}&s=${searchInput.value}`)
    .myApiKey ('JaoVpnTA6VkjcCmBlx3QPGHv9WhPBraK')
    .then((response) => response.json());
    })
    .then((result) =>  {
        console.log(result);
        displayImg.src = resulr.data.images.url;
        searchInput.value = ""
    })
    .catch((err) => {
        console.error(err);
        feedbackP.textContent = err.mesasge;
    })



















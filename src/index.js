function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let city = document.querySelector("#weather-app-city");
    city.innerHTML = searchInput.value;
    //call API
    //search for city
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
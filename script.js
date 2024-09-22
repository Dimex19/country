// fetch("https://restcountries.com/v3.1/all").then((response) => response.json()).then((data) => {
//   console.log(data)
//   document.querySelector("#flagDiv img").src = data[0].flags.svg
//   document.getElementById('country').innerHTML = data[0].name.common
//   document.getElementById('population').innerHTML = data[0].population
//   document.getElementById('region').innerHTML = data[0].region
//   document.getElementById('capital').innerHTML = data[0].capital
// })

// const apiURL = "https://restcountries.com/v3.1/all"

// https://restcountries.com/v3.1/name/deutschland

document.getElementById("inputArea").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent any default behavior, if necessary
    console.log("Form submitted with value: " + this.value);
    // You can call a function to handle the "submit" behavior here
    fetch(`https://restcountries.com/v3.1/name/${this.value}`).then((response) => response.json()).then((data) => {
      let card = ""
      data.map((item) => {
        card += `
          <div class="cards">
            <div id="flagDiv">
                <img id="countryFlag" src="${item.flags.svg}" alt="">
            </div>
            <div id="countryDetails">
                <h3 id="country"><b>${item.name.common}</b></h3>
                <p id="population"><b>Population:</b> <span>${item.population}</span></p>
                <p id="region"><b>Region:</b> <span>${item.region}</span></p>
                <p id="capital"><b>Capital:</b> <span>${item.capital}</span></p>
            </div>
        </div>`})
      document.querySelector(".cardsContainer").innerHTML = card
    }).catch((error) => console.log(error))
  }

});



fetch("https://restcountries.com/v3.1/all").then((response) => response.json()).then((data) => {
  let card = ""
  data.map((item) => {
    card += `
      <div class="cards">
        <div id="flagDiv">
            <img id="countryFlag" src="${item.flags.svg}" alt="">
        </div>
        <div id="countryDetails">
            <h3 id="country"><b>${item.name.common}</b></h3>
            <p id="population"><b>Population:</b> <span>${item.population}</span></p>
            <p id="region"><b>Region:</b> <span>${item.region}</span></p>
            <p id="capital"><b>Capital:</b> <span>${item.capital}</span></p>
        </div>
    </div>`})
  document.querySelector(".cardsContainer").innerHTML = card
}).catch((error) => console.log(error))


function africa () {
  fetch("https://restcountries.com/v3.1/region/africa").then((response) => response.json()).then((data) => {
    let card = ""
    data.map((item) => {
      card += `
        <div class="cards">
          <div id="flagDiv">
              <img id="countryFlag" src="${item.flags.svg}" alt="">
          </div>
          <div id="countryDetails">
              <h3 id="country"><b>${item.name.common}</b></h3>
              <p id="population"><b>Population:</b> <span>${item.name.common}</span></p>
              <p id="region"><b>Region:</b> <span>${item.region}</span></p>
              <p id="capital"><b>Capital:</b> <span>${item.capital}</span></p>
          </div>
      </div>`})
    document.querySelector(".cardsContainer").innerHTML = card
  }).catch((error) => console.log(error))
  document.querySelector("#filter").innerHTML = `
            <p>Filter by region</p>
            <img src="./down-chevron_9144316-removebg-preview.png" alt="" onclick="dropdown()">`
}

function america () {
  fetch("https://restcountries.com/v3.1/region/america").then((response) => response.json()).then((data) => {
    let card = ""
    data.map((item) => {
      card += `
        <div class="cards">
          <div id="flagDiv">
              <img id="countryFlag" src="${item.flags.svg}" alt="">
          </div>
          <div id="countryDetails">
              <h3 id="country"><b>${item.name.common}</b></h3>
              <p id="population"><b>Population:</b> <span>${item.name.common}</span></p>
              <p id="region"><b>Region:</b> <span>${item.region}</span></p>
              <p id="capital"><b>Capital:</b> <span>${item.capital}</span></p>
          </div>
        </div>`})
    document.querySelector(".cardsContainer").innerHTML = card
  }).catch((error) => console.log(error))
  document.querySelector("#filter").innerHTML = `
            <p>Filter by region</p>
            <img src="./down-chevron_9144316-removebg-preview.png" alt="" onclick="dropdown()">`
}
function asia () {
  fetch("https://restcountries.com/v3.1/region/asia").then((response) => response.json()).then((data) => {
    let card = ""
    data.map((item) => {
      card += `
        <div class="cards">
          <div id="flagDiv">
              <img id="countryFlag" src="${item.flags.svg}" alt="">
          </div>
          <div id="countryDetails">
              <h3 id="country"><b>${item.name.common}</b></h3>
              <p id="population"><b>Population:</b> <span>${item.name.common}</span></p>
              <p id="region"><b>Region:</b> <span>${item.region}</span></p>
              <p id="capital"><b>Capital:</b> <span>${item.capital}</span></p>
          </div>
      </div>`})
    document.querySelector(".cardsContainer").innerHTML = card
  }).catch((error) => console.log(error))
  document.querySelector("#filter").innerHTML = `
            <p>Filter by region</p>
            <img src="./down-chevron_9144316-removebg-preview.png" alt="" onclick="dropdown()">`
}
function europe () {
  fetch("https://restcountries.com/v3.1/region/europe").then((response) => response.json()).then((data) => {
    let card = ""
    data.map((item) => {
      card += `
        <div class="cards">
          <div id="flagDiv">
              <img id="countryFlag" src="${item.flags.svg}" alt="">
          </div>
          <div id="countryDetails">
              <h3 id="country"><b>${item.name.common}</b></h3>
              <p id="population"><b>Population:</b> <span>${item.name.common}</span></p>
              <p id="region"><b>Region:</b> <span>${item.region}</span></p>
              <p id="capital"><b>Capital:</b> <span>${item.capital}</span></p>
          </div>
      </div>`})
    document.querySelector(".cardsContainer").innerHTML = card
  }).catch((error) => console.log(error))
  document.querySelector("#filter").innerHTML = `
            <p>Filter by region</p>
            <img src="./down-chevron_9144316-removebg-preview.png" alt="" onclick="dropdown()">`
}
function oceania () {
  fetch("https://restcountries.com/v3.1/region/oceania").then((response) => response.json()).then((data) => {
    let card = ""
    data.map((item) => {
      card += `
        <div class="cards">
          <div id="flagDiv">
              <img id="countryFlag" src="${item.flags.svg}" alt="">
          </div>
          <div id="countryDetails">
              <h3 id="country"><b>${item.name.common}</b></h3>
              <p id="population"><b>Population:</b> <span>${item.name.common}</span></p>
              <p id="region"><b>Region:</b> <span>${item.region}</span></p>
              <p id="capital"><b>Capital:</b> <span>${item.capital}</span></p>
          </div>
      </div>`})
    document.querySelector(".cardsContainer").innerHTML = card
  }).catch((error) => console.log(error))
  document.querySelector("#filter").innerHTML = `
            <p>Filter by region</p>
            <img src="./down-chevron_9144316-removebg-preview.png" alt="" onclick="dropdown()">`
}

function dropdown () {
    document.querySelector("#filter").innerHTML = `
            <p>Filter by region</p>
            <img src="./down-chevron_9144316-removebg-preview.png" alt="" onclick="dropdown()">
            <div class="dropdown">
                <p onclick="africa()">Africa</p>
                <p onclick="america()">America</p>
                <p onclick="asia()">Asia</p>
                <p onclick="europe()">Europe</p>
                <p onclick="oceania()">Oceania</p>
            </div>`
}
function darkMode () {
  document.querySelector("body").style.backgroundColor = "hsl(207, 26%, 17%)"
  document.querySelector("body").style.color = "white"
  document.querySelector(".mainHeader").style.backgroundColor = "hsl(209, 23%, 22%)"
  document.querySelector("#filter").style.backgroundColor = "hsl(209, 23%, 22%)"
  document.querySelector(".inputFilter input").style.backgroundColor = "hsl(209, 23%, 22%)"
  console.log(document.querySelectorAll(".cards"))
  document.querySelectorAll(".cards").forEach(function(card) {
  card.style.backgroundColor = "hsl(209, 23%, 22%)"})
  // document.querySelectorAll
  // document.querySelector(".inputFilter input::placeholder").style.color = "white"
  let inputElement = document.querySelector(".inputFilter input");
// Add a dynamic style to the placeholder using CSS
  inputElement.style.setProperty("--placeholder-color", "white");
  inputElement.style.color = "white";  // Change text color
  document.querySelector(".inputFilter input").style.color="white"
  /* .inputFilter input::placeholder {
    padding-left: 60px;
} */
}
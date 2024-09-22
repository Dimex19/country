// fetch("https://restcountries.com/v3.1/all").then((response) => response.json()).then((data) => {
//   console.log(data)
//   document.querySelector("#flagDiv img").src = data[0].flags.svg
//   document.getElementById('country').innerHTML = data[0].name.common
//   document.getElementById('population').innerHTML = data[0].population
//   document.getElementById('region').innerHTML = data[0].region
//   document.getElementById('capital').innerHTML = data[0].capital
// })

// const apiURL = "https://restcountries.com/v3.1/all"

fetch("https://restcountries.com/v3.1/all").then((response) => response.json()).then((data) => {
  let card = ""
  data.map((item) => {
    card += `
      <div class="cards">
        <div id="flagDiv">
            <img id="countryFlag" src="${item.flags.svg}" alt="" style="height: 120px; width: 250px; border-radius: 5px 5px 0px 0px">
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


function africa () {
  fetch("https://restcountries.com/v3.1/region/africa").then((response) => response.json()).then((data) => {
    let card = ""
    data.map((item) => {
      card += `
        <div class="cards">
          <div id="flagDiv">
              <img id="countryFlag" src="${item.flags.svg}" alt="" style="height: 120px; width: 250px; border-radius: 5px 5px 0px 0px">
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
              <img id="countryFlag" src="${item.flags.svg}" alt="" style="height: 120px; width: 250px; border-radius: 5px 5px 0px 0px">
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
              <img id="countryFlag" src="${item.flags.svg}" alt="" style="height: 120px; width: 250px; border-radius: 5px 5px 0px 0px">
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
              <img id="countryFlag" src="${item.flags.svg}" alt="" style="height: 120px; width: 250px; border-radius: 5px 5px 0px 0px">
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
              <img id="countryFlag" src="${item.flags.svg}" alt="" style="height: 120px; width: 250px; border-radius: 5px 5px 0px 0px">
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
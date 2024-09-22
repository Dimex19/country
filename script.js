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
  // let card = "";
  //       data.map((item) => {
  //         card += `<div class="country-card">
  //         <img src="${item.flags.svg}" alt="" width="300px" />
  //       <h1  1 class="country">${item.name.common}</h1>
  //       <p class="population">Population : <span>${item.population}</span></p>
  //       <p class="region">Region : <span>${item.region}</span></p>
  //       <p class="capital">Capital : <span>${item.capital[0]}</span></p>
  //     </div>`})
  document.querySelector(".cardsContainer").innerHTML = card
}).catch((error) => console.log(error))

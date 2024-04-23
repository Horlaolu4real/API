fetchResult();

async function fetchResult() {
  try {
    const result = await fetch("https://restcountries.com/v3.1/all");
    if (!result.ok) {
      throw new Error("Country not found");
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
async function showResult() {
  const data = await fetchResult();
  if (!data) {
    return;
  }
  const varyCountry = document.getElementById("result");
  varyCountry.innerHTML = "";
  data.forEach((country) => {
    const countryName = country.name.common;
    const capitalName = country.capital;
    const flagColor = country.flags.png;

    const insideHtml = `
        <div class="country">
           <h2>Name:${countryName}</h2>
           <h2>Capital:${capitalName}</h2>
           <img src =${flagColor}>
        </div>
        `;
    varyCountry.innerHTML += insideHtml;
  });
}
window.onload = showResult;

document
  .getElementById("contentName")
  .addEventListener("input", function (search) {
    const countrySearch = search.target.value.trim().toLowerCase();
    const counter = document.querySelectorAll(".country");
    counter.forEach((country) => {
      const nameCountry = country.querySelector("h2").textContent.toLowerCase();
      if (nameCountry.includes(countrySearch
      )) {
        country.style.display = "block";
      } else {
        country.style.display = "none";
      }
    });
  });

  

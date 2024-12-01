document.addEventListener("DOMContentLoaded", () => {
  const fetchCountriesButton = document.getElementById("fetchCountries");
  const countryListDiv = document.getElementById("countryList");

  fetchCountriesButton.addEventListener("click", () => {
    fetchCountries();
  });

  function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        displayCountries(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  function displayCountries(countries) {
    countryListDiv.innerHTML = "";
    countries.forEach((country) => {
      const countryDiv = document.createElement("div");
      countryDiv.classList.add("country");
      countryDiv.innerHTML = `
          <h3>${country.name.common}</h3>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        `;
      countryListDiv.appendChild(countryDiv);
    });
  }
});

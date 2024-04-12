const countryNames = ["India", "Rusia", "France", "China", "America"]; // Add your country names here
let index = 0;

function changeCountryName() {
    document.getElementById("countryName").textContent = countryNames[index];
    index = (index + 1) % countryNames.length;
}

setInterval(changeCountryName, 200);

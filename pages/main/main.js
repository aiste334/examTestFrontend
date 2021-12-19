export default () => {
  const content = document.querySelector(".content");

  function getCars() {
    fetch("http://localhost:8080/" + "cars/")
      .then((response) => response.json())
      .then((cars) => {
        console.log(cars[2].brand);

        const divText = document.querySelector(".text");

        cars.forEach((car) => {
          const carBrand = document.createElement("h3");
          carBrand.innerHTML = car.brand;
          divText.appendChild(carBrand);
        });
      });
  }

  function initButtons() {
    const carsLink = document.querySelector(".cars-redirect");
    const customersLink = document.querySelector(".customers-redirect");
  
    carsLink.addEventListener("click", () => (window.location.href = "./#/cars"));
    customersLink.addEventListener("click", () => (window.location.href = "./#/customers"));
  }

  fetch("./pages/main/main.html")
    .then((response) => response.text())
    .then((html) => {
      content.innerHTML = html;
      getCars();
      initButtons();
    });
};

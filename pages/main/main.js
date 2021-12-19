export default () => {
  const content = document.querySelector(".content");

  function getCars(){
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
  
  fetch("./pages/main/main.html")
    .then((response) => response.text())
    .then((html) => {
      content.innerHTML = html;
      getCars();
    });
};



export default () => {
    const content = document.querySelector(".content");
    fetch("./pages/cars/cars.html")
      .then((response) => response.text())
      .then((html) => {
        content.innerHTML = html;
      });
  };
import renderMain from "./pages/main/main.js";
import renderCustomers from "./pages/customers/customers.js";
import renderCars from "./pages/cars/cars.js";


let root = "/";
const router = new Navigo("/", { hash: true });

router
    .on({
        "/": () => {
            renderMain();
        },
        "/customers": () => {
            renderCustomers();
        },
        "/cars" : () => {
            renderCars();
        },
    })
    .resolve();
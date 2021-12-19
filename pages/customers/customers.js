let table = document.querySelector(".customer-table");
const addBtn = document.querySelector(".add-customer");

function getCustomers() {
  fetch("http://localhost:8080/" + "customers/")
    .then((response) => response.json())
    .then((customerData) => {
      createTable(customerData);
    });
}
getCustomers();
addCustomer();

function createTable(customerData) {
  while (table.firstElementChild.children.length > 1) {
    table.firstElementChild.removeChild(table.firstElementChild.lastChild);
  }

  customerData.forEach((customer) => {
    let row = table.insertRow(-1);

    // Insert new cells:
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    // Add text to the new cells:
    cell1.innerHTML = customer.customerId;
    cell2.innerHTML = customer.lastName;
    cell3.innerHTML = customer.email;
  });
}
/////
function addCustomerRow() {
  let row = table.insertRow(-1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("class", "last-name-input");
  submitBtn.innerHTML = "Submit";
  cell1.appendChild(submitBtn);

  const lastNameInput = document.createElement("input");
  lastNameInput.setAttribute("type", "text");
  lastNameInput.setAttribute("value", "");
  lastNameInput.setAttribute("class", "last-name-input");
  cell2.appendChild(lastNameInput);
  console.log(lastNameInput.value);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("value", "");
  emailInput.setAttribute("class", "email-input");
  cell3.appendChild(emailInput);

  submitBtn.addEventListener("click", addToArray);

  function addToArray() {
    let arrValues = new Array();
    arrValues.push(lastNameInput.value);
    arrValues.push(emailInput.value);
    console.log(arrValues);

    const body = {
      lastName: lastNameInput.value,
      email: emailInput.value,
    };

    function logArray() {
      console.log(arrValues);
    }

    fetch("http://localhost:8080/customer/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((customerData) => {
        console.log(customerData);
      });
      location.reload();
  }
}
function addCustomer() {
  addBtn.addEventListener("click", addCustomerRow);
}

// bookingButton.addEventListener("click", ());
// function putBooking(email, onSuccess) {
//   const seats = getSelectedSeats();
//   const body = {
//     viewing: viewingId,
//     email: email,
//     seats: seats,
//   };

//   fetch(backendURI + "/booking/" + bookingId, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   })
//     .then((response) => response.json())
//     .then((booking) => {
//       onSuccess();
//     });
// }

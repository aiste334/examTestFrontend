function getCustomers(){
    fetch("http://localhost:8080/" + "customers/")
        .then((response) => response.json())
        .then((customerData) => {    
    
      createTable(customerData);
        });
    }
    getCustomers();



function createTable(customerData) {
    let table = document.querySelector(".customer-table");
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

    //   // Create the Edit button
    //   const editBtn = document.createElement("button");
    //   editBtn.innerHTML = "EDIT";
    //   editBtn.classList.add("cta");
    //   cell4.appendChild(editBtn);

    //   editBtn.addEventListener("click", () => {
    //     const inputDate = prompt("Enter a new date", "2021-12-23 14:00");
    //     const body = {
    //       dateTime: inputDate,
    //     };
    //     fetch(backendURI + "/viewing/" + viewing.viewingId, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(body),
    //     })
    //       .then((response) => response.text())
    //       .then((viewing) => {
    //         console.log(inputDate);
    //         console.log("edited viewing: ", viewing);
    //         cell3.innerHTML = inputDate;
    //       });
    //   });

    //   // Create the Delete button
    //   const deleteBtn = document.createElement("button");
    //   deleteBtn.innerHTML = "DELETE";
    //   deleteBtn.classList.add("cta");
    //   cell5.appendChild(deleteBtn);

    //   deleteBtn.addEventListener("click", () => {
    //     fetch(backendURI + "/viewing/" + viewing.viewingId, {
    //       method: "DELETE",
    //     })
    //       .then((response) => response.text())
    //       .then(() => {
    //         table.querySelector("tbody").removeChild(row);
    //       });
    //   });
    });
  }
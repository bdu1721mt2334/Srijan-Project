fetch("http://127.0.0.1:5000/get-vendors")
  .then(res => res.json())
  .then(vendors => {
    const tableBody = document.getElementById("vendorTableBody");
    tableBody.innerHTML = "";

    vendors.forEach(v => {
      tableBody.innerHTML += `
        <tr>
          <td>${v.vendorName}</td>
          <td>${v.company}</td>
          <td>${v.phone}</td>
          <td>${v.createdAt}</td>
        </tr>
      `;
    });
  })
  .catch(err => console.error(err));

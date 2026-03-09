function addVendor() {
  const vendorName = document.getElementById("vendorName").value;
  const company = document.getElementById("company").value;
  const phone = document.getElementById("phone").value;

  fetch("http://127.0.0.1:5000/add-vendor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      vendorName,
      company,
      phone
    })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    window.location.href = "view-vendor.html";
  })
  .catch(err => console.error(err));
}

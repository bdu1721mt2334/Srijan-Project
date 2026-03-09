function saveOrder() {
    const vendor = document.getElementById("vendor").value;
    const product = document.getElementById("product").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;

    if (!vendor || !product || !amount || !date) {
        alert("All fields required");
        return;
    }

    fetch("http://127.0.0.1:5000/add-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            vendor,
            product,
            amount,
            date
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Order saved successfully");
        window.location.href = "reports.html";
    })
    .catch(err => {
        console.error(err);
        alert("Error saving order");
    });
}

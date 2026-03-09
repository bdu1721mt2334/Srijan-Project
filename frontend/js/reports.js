fetch("http://127.0.0.1:5000/get-orders")
    .then(res => res.json())
    .then(data => {
        const table = document.getElementById("reportTable");
        table.innerHTML = "";

        data.forEach(order => {
            table.innerHTML += `
                <tr>
                    <td>${order.vendor}</td>
                    <td>${order.product}</td>
                    <td>${order.amount}</td>
                    <td>${order.date}</td>
                </tr>
            `;
        });
    })
    .catch(err => {
        console.error(err);
        alert("Failed to load reports");
    });

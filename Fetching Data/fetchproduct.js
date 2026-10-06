fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {

    console.log(data);

    let products = data.products;
    let table = document.getElementById("productsTable");

    for(let i=0;i<5;i++){

        table.innerHTML += `
        <tr>
            <td>${products[i].id}</td>
            <td>${products[i].title}</td>
            <td>${products[i].price}</td>
            <td><img src="${products[i].thumbnail}" width="60"></td>
        </tr>
        `;
    }
});

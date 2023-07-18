var tbody = document.getElementsByTagName("tbody")[0];
async function fetchdata() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        var row = `<tr style="font-size: 25px">
    <td >${data[i].id}</td>
    <td>${data[i].category}</td> 
    <td>${data[i].title}</td>
    <td>${data[i].description}</td>
    <td>${data[i].price}</td>
    <td>${data[i].rating.rate}</td>
    <td>${data[i].rating.count}</td>
    <td><img src=${data[i].image} style="width:200px"></td>
    </tr>`;
        tbody.innerHTML += row;
    }
}
fetchdata();

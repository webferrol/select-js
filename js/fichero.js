document.querySelector("#precios").value = document.querySelector("#pizzas").options[0].value;
document.querySelector("#pizzas").addEventListener("change",e=>{
    document.querySelector("#precios").value = e.target.options[e.target.selectedIndex].value;
});
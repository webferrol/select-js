document.querySelector("#precios").value = document.querySelector("#pizzas").options[0].value;

const crearElemento=(texto)=>{
    let elemento = document.createElement("div");
    elemento.className="engadido";
    let elTexto = document.createTextNode(texto);
    elemento.appendChild(elTexto);
    document.querySelector(".selector").appendChild(elemento);
}
document.querySelector("#pizzas").addEventListener("change",e=>{
    document.querySelector("#precios").value = e.target.options[e.target.selectedIndex].value;
    crearElemento(e.target.options[e.target.selectedIndex].text);
});

document.addEventListener("click",e=>{
    if(e.target.className==="engadido")
        e.target.parentNode.removeChild(e.target);

});
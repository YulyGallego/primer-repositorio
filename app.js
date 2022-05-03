const main = document.getElementById("main-market")
const select = document.getElementById("select-products")
window.addEventListener('load',loadSelect);

function loadSelect(){
    products.map(element =>{
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    select.appendChild(opt);
    });
}

const contentContainer = document.querySelector('.content');


const imagens = [{'url': '1.jpg'},{'url':'2.jpg'},{'url':'3.jpg'},{'url':'4.jpg'},{'url':'5.jpg'}];


const creatElement = (foto,content) => {
  foto.forEach(imagem => {
    content.innerHTML += `<div class='item'><img src='${imagem.url}'></div>`
  })
}
creatElement(imagens,contentContainer);

let items = document.querySelectorAll('.item');

const previous = () =>{
contentContainer.appendChild(items[0]);
items = document.querySelectorAll('.item')
}
const next = () => {
    const lastItem = items[items.length-1]
    contentContainer.insertBefore(lastItem,items[0])
    items = document.querySelectorAll('.item')
}
console.log(imagens[0].url)
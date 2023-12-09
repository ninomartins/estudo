

let count = 0
let muadaTexto = 0
const galeria = []
const imagens = document.querySelectorAll('[data-foto]')
const testos = document.querySelectorAll('.testos')

imagens.forEach((ele,index)=>{
  galeria[index]=ele.src
  ele.style.display='none'
  ele.onclick = () =>trocaFoto(index)
})
imagens[0].style.display='block'

const trocaFoto = (index) => {
 
count ++
if (count>imagens.length-1){
  count=0
}
imagens[0].src=galeria[count]
muadaTexto ++

testos.forEach((ele,index)=>{
  ele.style.opacity ='0'
  const texto1 = document.querySelector(`#texto${muadaTexto}`)
  texto1.style.opacity = '1'

})
if (muadaTexto == 3) {
  muadaTexto = 0
}
console.log(galeria[0])
}












const first =document.querySelector('.First');
const second =document.querySelector('.Second');
const thrid =document.querySelector('.thrid');

const btn=document.querySelector('.btn');

btn.addEventListener('click',() => {
    setTimeout(() => { 
        first.style.Color='red'
    setTimeout(() =>   {
         second.style.Color='blue'
         
    setTimeout(() =>  {
        thrid.style.Color='green'
         } , 1000 )
        },3000)
    },5000)
})

const addButton=document.getElementById('add');
const substractButton=document.getElementById('substract');
const multiplyButton=document.getElementById('multiply');
const divideButton=document.getElementById('divide');

const result=document.getElementById('result');


addButton.addEventListener('click', ()=>{
const num1=parseInt(document.getElementById('num1').value)
const num2=parseInt(document.getElementById('num2').value)
const operationResult=num1+num2

result.innerHTML=operationResult;
})


substractButton.addEventListener('click', ()=>{
const num1=parseInt(document.getElementById('num1').value)
const num2=parseInt(document.getElementById('num2').value)
const operationResult=num1-num2
console.log(num1)
result.innerHTML=operationResult;
})


multiplyButton.addEventListener('click', ()=>{
const num1=parseInt(document.getElementById('num1').value)
const num2=parseInt(document.getElementById('num2').value)
const operationResult=num1*num2

result.innerHTML=operationResult;
})


divideButton.addEventListener('click', ()=>{
const num1=parseInt(document.getElementById('num1').value)
const num2=parseInt(document.getElementById('num2').value)
const operationResult=num1/num2

result.innerHTML=operationResult;
})







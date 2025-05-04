const numberView = document.querySelector("input")
const resultView = document.getElementById("result")
const buttons = document.querySelectorAll("button")
const btnClear = document.getElementById("clear")

let calculation = []

function calculate(button){
try{
const value = button.textContent

if(value === "="){
    let total =  numberView.value = eval(numberView.value)
       resultView.textContent = total
}else{
    calculation.push(value)
    numberView.value = calculation.join('')
}
}
 catch(error){
    console.log("Error")
}
}

btnClear.addEventListener("click", () =>{
    calculation = []
    numberView.value = ""
    resultView.textContent = ""
})

calculate()
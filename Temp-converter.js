const tempInput = document.querySelector(".temp-input");
const resultElem = document.querySelector(".f-result");
const convertBtn = document.querySelector(".convert-btn");
const clearBtn = document.querySelector(".clear-btn");

convertBtn.addEventListener("click",function(){
    const cTemp = +tempInput.value;
    if(!isNaN(cTemp)){
        const fTemp = cTemp*1.8+32;
        resultElem.innerHTML = fTemp;
    }
});

clearBtn.addEventListener("click",function(){
    tempInput.value = "";
    resultElem.innerHTML = "";
});
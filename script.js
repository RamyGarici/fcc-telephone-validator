const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const phoneNumber = document.getElementById("user-input");
const regex = /^(1\s?)(\(\d{3}\)|\d{3})([\s-]?)(\d{3})([\s-]?)(\d{4})$/


const checkNumber = (number)=>{
    if(!number){alert("Please provide a phone number");}
        else if(regex.test(number)){result.textContent=`Valid US number: ${phoneNumber.value} `}
        else{result.textContent=`Invalid US number: ${phoneNumber.value} `

        }
       


    

}

clearButton.addEventListener("click",()=>result.textContent="")

checkButton.addEventListener("click",()=>checkNumber(phoneNumber.value));




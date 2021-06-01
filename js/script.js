var pledgeSelection = document.querySelector(".pledge-selection_wrapper")
var selectReward = document.querySelectorAll(".card_bottom--btn")
var confirmation = document.querySelector(".confirmation_wrapper")
var btnPledgePrice = document.querySelector(".pledge-price button")
var closePledge = document.querySelector(".imgclose")
var body = document.getElementsByTagName("body")
var checkbox = document.querySelectorAll(".checkbox input[type=checkbox]")
var titleCheckbox = document.getElementsByTagName("h3")
var pledgePrice = document.querySelectorAll(".pledge-price")
var btnContinue = document.querySelectorAll(".pledge_price .btn_green")
var gotIt = document.querySelector(".confirmation .btn_green")
var borderCard = document.querySelectorAll(".pledge-selection_card")

// POPUP MASQUEES //
pledgeSelection.classList.add("hide")
confirmation.classList.add("hide")
for (let i = 0; i < pledgePrice.length; i++) {
    pledgePrice[i].classList.add("hide")
}


// AFFICHAGE DES POPUP //

for (let i = 0; i < selectReward.length; i++) {
    const element = selectReward[i];
    selectReward[i].addEventListener("click", showPledgeSelection)
}

function showPledgeSelection(){
    pledgeSelection.classList.replace("hide", "showblock")
    window.scrollTo(0, 400)
}

closePledge.addEventListener("click", () => {
    pledgeSelection.classList.replace("showblock", "hide")
})

btnPledgePrice.addEventListener("click", showConfirmation)

function showConfirmation(){
    confirmation.classList.replace("hide", "showblock")
    pledgeSelection.classList.replace("showblock", "hide")
}

gotIt.addEventListener("click", () => {
    confirmation.classList.replace("showblock", "hide")
})


// checkbox activent la partie prix 
for (let i = 0; i < checkbox.length; i++) {
    const check = checkbox[i];
    checkbox[0].addEventListener("change", showConfirmation);
    titleCheckbox[0].addEventListener("click", showConfirmation);
    
    check.addEventListener("click", () =>{
        if(i > 0){        
            for (let index = 0; index < pledgePrice.length; index++) {
                pledgePrice[i - 1].classList.toggle("hide")
                pledgePrice[i - 1].classList.toggle("showflex")
            }
            for (let index = 0; index < borderCard.length; index++) {
                const card = borderCard[i];
                
                if(pledgePrice[i - 1].classList.toggle("showflex")){
                    card.classList.add("green-border")
                } else{
                    card.classList.remove("green-border")
                }
            }
        }
    });  
}




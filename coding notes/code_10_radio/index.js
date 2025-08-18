
document.getElementById("myBtn").onclick = function(){

    const VisaBtn = document.getElementById("VisaBtn");
    const MasterBtn = document.getElementById("MasterBtn");
    const PaypalBtn = document.getElementById("PaypalBtn");

    if(VisaBtn.checked) {
        console.log("You are paying with Visa");
    }
    else if(MasterBtn.checked) {
        console.log("You are paying with Mastercard");
    }
    else if(PaypalBtn.checked) {
        console.log("You are paying with Paypal");
    }
    else{
        console.log("You must select a card");
    }

}
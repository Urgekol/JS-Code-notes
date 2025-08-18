

let item = "cryptoCurrency";
let value = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, value);     
                                                 //after 3s of opening the page
let timer2 = setTimeout(secondMessage, 6000);    //after 6s of opening the page
let timer3 = setTimeout(thirdMessage, 9000);     //after 9s of opening the page

function firstMessage(item, value)
{
    alert(`Buy this ${item} course for $${value}!`);
}

function secondMessage()
{
    alert('This is not a scam');
}

function thirdMessage()
{
    alert('Do it..!!!');
}


document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);       //clear the timeOut
    clearTimeout(timer3);

    alert("Thanks for buying XD");
}
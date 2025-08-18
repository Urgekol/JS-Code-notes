/*
    setTimeout() = invokes a function after a number of millisecond
                    asynchronous function (doesn't pause execution)

*/

setTimeout(firstMessage, 3000);     //after 3s of opening the page
setTimeout(secondMessage, 6000);    //after 6s of opening the page
setTimeout(thirdMessage, 9000);     //after 9s of opening the page

function firstMessage()
{
    alert('Buy this course for $500!');
}

function secondMessage()
{
    alert('This is not a scam');
}

function thirdMessage()
{
    alert('Do it..!!!');
}



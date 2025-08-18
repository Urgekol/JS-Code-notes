
/*

    console.time()  =   Starts a timer you can use to
                        track/ monitor how long an operation took
                        Give each timer a unique name;

*/


//start
console.time("Respond Time");


alert("click the ok button");   //timer will stop until we press ok


/*
    setTimeout(() => console.log("Hello!"), 3000);      

    for this, the timer won't stop
*/


//end
console.timeEnd("Respond Time");
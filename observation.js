var myName = "Gordan";

function sayName() {
    var secret = 'watchandcode';
    console.log(myName);
}
/* if your inside of the function you can look out an see data , 
but if you are outside you can not look in  */
sayName();
 console.log(secret);
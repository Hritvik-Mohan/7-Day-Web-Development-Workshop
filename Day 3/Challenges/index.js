function findSquare() {
    let a = document.forms["squarefrm"]["num"].value;
    document.getElementById("square").innerHTML="Square of the number is: "+(a*a);
    return false;
}


function findPrime() {
    let num = document.forms["primefrm"]["num"].value;

    if(num <=1){
        document.getElementById("prime").innerHTML=(`${num} is not prime`);
        return false;
    }

    let c = 2;

    while (c**2 <= num){
        if(num % c === 0){
            document.getElementById("prime").innerHTML = (`${num} is not prime`);
            return false;
        }
        c++;
    }

    document.getElementById("prime").innerHTML = (`${num} is prime`);
    return false;

}

function evenOdd() {

    let num = document.forms["oddEven"]["num"].value;

    if(num%2 == 0){
        document.getElementById("oddEve").innerHTML = (`${num} is even`);
        return false;
    } else {
        document.getElementById("oddEve").innerHTML = (`${num} is odd`);
        return false;
    }

}
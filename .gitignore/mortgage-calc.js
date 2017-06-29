//The code

//the formula to caluclate monthly payment c = (r*p) * (math.pow((1+r), N))/Math.pow((1+r),N) - 1)
//@param p float amount borrowed
//@param r interest rate as a percentage
//@param n term in years
function calculateMortgage(p,r,n) {

    var monthlyPayments = (r*p) * (math.pow((1+r), N))/Math.pow((1+r),N) - 1;

    //convert r to decimal
    r = percentToDecimal(r)

    //convert years to months
    n = yearsToMonths(n)

    console.log("P", p);
    console.log("R", r);
    console.log("N", n);

    var pmt = (r * p) / (1 - math.pow((1 + r), -n));
    return parsefloat.pmt.toFixed(2);
}

function percentToDecimal(percent){
    return (percent/12)/100;
}

function yearsToMonths(year){
    return year*12;
}

function postPayment(payment){
    var htmlEl = document.getElementById("outMonthly");
    htmlEl.innerText = pmt;

var btn = document.getElementById("btnCalculate");
btn.onlcick = function(){
    var cost = docuemnt.getElementById("inCost").value;
    var downPayment = document.getElementById("inDown").value;
    var interest = document.getElementById("inAPR").value;
    var term = document.getElementById("inPeriod").value;
    
    console.log(cost, downPayment, interest, term);
    var amountBorrowed = cost - amountBorrowed;
    var pmt = calculateMortgage(amountBorrowed, interest, term)
    postPayment(pmt);
}
//Computer Function - to determine the interest gained over the specified amount of time based on the principal amount
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+
                "\</mark>,<br\>at an interest rate of <mark>"+rate+"%\</mark>.<br\>You will receive an amount of <mark>"
                +interest+"\</mark>,<br\>in the year <mark>"+year+"\</mark><br\>";
        
    principal.focus();
    
}

//Updates the range with current value for the interest rate.
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
//This function validates the input before calling the compute function.
function principalValidation()
{
    
    
    if (principal.value <= 0){
        alert("Please enter a number greater than 0.");
        principal.focus();
        return false;
    }
    principal.focus();
    return compute();
    

}

//brings the amount input into focus for the user to use once the page is loaded. 
function focusAmount(){
    
    principal.focus();
}

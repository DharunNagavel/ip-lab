function getCurrentDate() 
{
    const now = new Date();
    let dob = document.getElementById('dob').value;
    let DOB = new Date(dob).getFullYear();
    let year = now.getFullYear();
    document.getElementById('h1').innerHTML = "Age : " + (year - DOB);
}

function Add()
{
    let num1 =parseInt(document.getElementById('num1').value);
    let num2 =parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = "ADD : " + (num1 + num2);
}
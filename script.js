function calculatebmi()
{
    
    let weightinput = prompt("Enter your weight in kg:");
     let heightinput = prompt("Enter your height in cm:");

     let weight = parseFloat (weightinput);
     let heightCM = parseFloat (heightinput)

     let height = heightCM / 100;

     let bmi = weightinput /(height ** 2 );
     
     document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)};`

}
 
    
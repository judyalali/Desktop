
document.getElementById("calculateBtn").addEventListener("click", function (){
var weight = document.getElementById("weightInput").value  
var height = document.getElementById("heightInput").value
    var Bmi = weight/(height*height)
    document.getElementById("bmi").innerHTML = Bmi
    console.log(Bmi);


    if (Bmi<18) {
        document.getElementById("bmIcategory").innerHTML = "   skinny    "

 }
        else if (Bmi <= 24.9 && Bmi >= 18) {
        document.getElementById("bmIcategory").innerHTML = "    Perfect weight   "
}
            else if (Bmi <= 29.9 && Bmi >= 25) {
                document.getElementById("bmIcategory").innerHTML = "    overweight   "
}
        else if (Bmi <= 34.9 && Bmi >= 30) {
            document.getElementById("bmIcategory").innerHTML = "    obesity of the first degree   "
        }
        else if (Bmi <= 39.9 && Bmi >= 35) {
            document.getElementById("bmIcategory").innerHTML = "    obesity of the second degree   "
        }else{

            document.getElementById("bmIcategory").innerHTML = "    dangerous obesity  " 
        }


})
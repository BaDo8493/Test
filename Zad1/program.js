function sprawdzanie()
{
    var liczba = document.getElementById("liczba").value;
    
    if (liczba>0) document.getElementById("odpowiedz").innerHTML = "dodatnia"
    else if (liczba=="0") document.getElementById("odpowiedz").innerHTML = "zero"
    else if (liczba<0) document.getElementById("odpowiedz").innerHTML = "ujemna"
    else document.getElementById("odpowiedz").innerHTML = "nie wiem co to za liczba"
}
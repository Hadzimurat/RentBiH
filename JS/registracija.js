function validate(forma) {

    var forma = document.getElementById(forma);
    var elementi = forma.getElementsByClassName("unos");

    for (var i in elementi) {
        if (elementi[i].value === "") {
            elementi[i].classList.add("error");
        }
        else{
            elementi[i].classList.remove("error");
        }
    }

}
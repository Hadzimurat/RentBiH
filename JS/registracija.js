function validate() {

    var elementi = document.getElementsByClassName("unos");

    for (var i in elementi) {
        if (elementi[i].value === "") {
            elementi[i].classList.add("error");
        
        }
        else{
            elementi[i].classList.remove("error");
        }
    }

}
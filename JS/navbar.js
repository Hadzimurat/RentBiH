function saltungSlika(strana){
    var slika = document.getElementById("slikz");
    var niz = ["/Slike/bijela-tabija16906.jpg", 
                "/Slike/carsija.jpg",
                "/Slike/stari-most.jpg",
                "/Slike/TURIZAM-Tuzla-368-1.jpg",
                "/Slike/VH-Gradacac-27.jpg",
                "/Slike/vrelo-bosne-ilidza-.jpg"];

     var trenutna = slika.src;

     for(var s in niz){
        if(trenutna.includes(niz[s])){
            if(strana === "desno"){
                if(parseInt(s) === 5)
                    var sljedeca = ".." + niz[0];
                else
                    var sljedeca = ".." + niz[parseInt(s)+1]; 

                    slika.src = sljedeca;
            }
            else{
                if(parseInt(s) === 0)
                    var prosla = ".." + niz[5];
                else
                    var prosla = ".." + niz[parseInt(s)-1];
                
                slika.src = prosla
            }
        }        
     }
}
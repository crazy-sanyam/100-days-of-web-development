function ID(clicked_id) {
    id = clicked_id;
    k = document.getElementById(id).innerHTML;
    if (id == "b1" || id == "b2" || id == "b3" || id == "b4" || id == "b5" || id == "b6" || id == "b7" || id == "b8" || id == "b9" || id == "b0") {
        l = document.getElementById("inputBar").innerHTML;
        document.getElementById("inputBar").innerHTML = (10 * l + Number(k));
    }
    if (id == "bAC") {
        document.getElementById("inputBar").innerHTML = 0;
        console.clear();
    }
    if (id == "bPlus" || id == "bMinus" || id == "bDivide" || id == "bMultiply") {
        n1 = document.getElementById("inputBar").innerHTML;
        a = id;
        document.getElementById("inputBar").innerHTML = null;
    }
    if (id == "bEqual") {
        n2 = document.getElementById("inputBar").innerHTML;
        if (a == "bPlus") {
            document.getElementById("inputBar").innerHTML = Number(n1) + Number(n2);
        }
        else if (a == "bMinus") {
            document.getElementById("inputBar").innerHTML = Number(n1) - Number(n2);
        }
        else if (a == "bMultiply") {
            document.getElementById("inputBar").innerHTML = Number(n1) * Number(n2);
        }
        else if (a == "bDivide") {
            document.getElementById("inputBar").innerHTML = Number(n1) / Number(n2);
        }

    }
    if (id == "bPercent") {
        document.getElementById("inputBar").innerHTML = document.getElementById("inputBar").innerHTML / 100;
    }

    
}

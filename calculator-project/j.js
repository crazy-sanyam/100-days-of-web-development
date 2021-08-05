window.addEventListener("keydown", f);
function f(e) {
    key1 = document.querySelector(`button[data-key="${e.keyCode}"]`);
    // key2 = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // alpha(key);
    keyId1 = key1.getAttribute('id');
    // keyId2 = key2.getAttribute('id');
    alpha(keyId1);
    // alpha(keyId2);
}
function ID(clicked_id) {

    // document.getElementById(clicked_id).style.;
    alpha(clicked_id);
}
function alpha(apple) {
    id = apple;
    k = document.getElementById(id).innerHTML;
    if (id == "b1" || id == "b2" || id == "b3" || id == "b4" || id == "b5" || id == "b6" || id == "b7" || id == "b8" || id == "b9" || id == "b0") {
        l = document.getElementById("inputBar").innerHTML;
        document.getElementById("inputBar").innerHTML = (10 * l + Number(k));
    }
    else if (id == "bAC") {
        document.getElementById("inputBar").innerHTML = 0;
        console.clear();
    }
    else if (id == "bPlus" || id == "bMinus" || id == "bDivide" || id == "bMultiply") {
        n1 = document.getElementById("inputBar").innerHTML;
        a = id;
        document.getElementById("inputBar").innerHTML = null;
    }
    else if (id == "bEqual") {
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
    else if (id == "bPercent") {
        document.getElementById("inputBar").innerHTML = document.getElementById("inputBar").innerHTML / 100;
    }
    else if (id == "backspace") {
        gm = document.getElementById("inputBar").innerHTML;
        gn = gm % 10;
        gm = gm - gn;
        gm = gm / 10;
        document.getElementById("inputBar").innerHTML = gm;
    }

}

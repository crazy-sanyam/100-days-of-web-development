
function func11() {
    //AC button
    //this functin will clear all inputs
    console.log("AC button clicked");
    document.getElementById("inputBar").innerHTML = 0;
}
function func12() {
    // */- button
    //this function will change the sign 
    var x;
    x = document.getElementById("inputBar").innerHTML;
    if (x < 0) {
        x = x*(-1);
    }
    document.getElementById("inputBar").innerHTML=x;

}
function func13() {
    // % button
    console.log("% button clicked");
}
function func14() {
    // / button
    console.log("/ button clicked");
}
function func24(){
    // X button
    var x,y;
    x=document.getElementById("inputBar").innerHTML;
    document.getElementById("inputBar").innerHTML=0;
}
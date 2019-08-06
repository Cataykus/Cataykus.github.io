//bootstrap js//
$('#collapseOne').on('show.bs.collapse', function () {
    document.getElementById("card-one").style.backgroundColor = "#00fff0";
});
$('#collapseOne').on('hide.bs.collapse', function () {
    document.getElementById("card-one").style.backgroundColor = "white";
});
$('#collapseTwo').on('show.bs.collapse', function () {
    document.getElementById("card-two").style.backgroundColor = "#00fff0";
});
$('#collapseTwo').on('hide.bs.collapse', function () {
    document.getElementById("card-two").style.backgroundColor = "white";
});
$('#collapseThree').on('show.bs.collapse', function () {
    document.getElementById("card-three").style.backgroundColor = "#00fff0";
});
$('#collapseThree').on('hide.bs.collapse', function () {
    document.getElementById("card-three").style.backgroundColor = "white";
});
$('#collapseFourth').on('show.bs.collapse', function () {
    document.getElementById("card-four").style.backgroundColor = "#00fff0";
});
$('#collapseFourth').on('hide.bs.collapse', function () {
    document.getElementById("card-four").style.backgroundColor = "white";
});
let button = document.getElementById("button-menu");
let buttonItem = document.getElementById("button-menu-item");
button.addEventListener("click", clickBtnFunc);

function clickBtnFunc(){
    if(buttonItem.classList.contains("clicked")){
        buttonItem.classList.remove("clicked");
        button.classList.remove("clickedMenu");
        document.getElementById("navbtns").style.position = "relative";
        document.getElementById("adaptive-menu").classList.remove("adaptive-menu-active");
    }
    else{
        buttonItem.classList.add("clicked");
        button.classList.add("clickedMenu");
        document.getElementById("navbtns").style.position = "static";
        document.getElementById("adaptive-menu").classList.add("adaptive-menu-active");
    }
}

new WOW().init();
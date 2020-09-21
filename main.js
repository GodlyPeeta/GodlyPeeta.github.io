var clicks = 0;
function sellBook() {
    clicks += 1;
    document.getElementsByClassName("count")[0].innerHTML = "Money: $" + (Math.round(clicks * 100) / 100).toFixed(2);
    ;
};
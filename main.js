var money = 0;

var materialNames = ['Paper'];
var materialValues = [5000]

function sellBook() {
    paper = Math.round(Math.random()*200)+50
    materialValues[0]-=paper
    cost = Math.round(Math.random()*300)/100+9
    money += cost;
};

function refreshMaterials() {
    var names =""
    var values =""
    for(i=0; i<materialNames.length; i++){
        names += materialNames[i] + "<br>";
        values += materialValues[i] + "<br>";
        document.getElementsByClassName("materialNames")[0].innerHTML = names;
        document.getElementsByClassName("materialValues")[0].innerHTML = values;
    }
}

function refreshMoney() {
    document.getElementsByClassName("count")[0].innerHTML = "Money: $" + (Math.round(money * 100) / 100).toFixed(2);
}

function tick() {
    refreshMoney()
    refreshMaterials()
    console.log("tick")
}

function runTicks() {
    setInterval(tick, 50);
}
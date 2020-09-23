var money = 0;

var materialNames = ['Paper'];
var materialValues = [5000]

var inventoryNames = ['Books']
var inventoryValues = [0]

var demand = [0]
var cost = [0]

var buyMaterialNames = ['Paper']
var buyMaterialValues = [75]

function buyStuff() {
    for(i = 0; i<inventoryValues.length; i++){
        if(inventoryValues[i] != 0){
            rand = Math.random()*100
            if(rand < demand[i]/2){
                money+=cost[i]
                inventoryValues[i] -=1
            }
        }
    }
}

function refreshCost() {
    cost[0] = parseInt(document.getElementById("bookCost").value);
}

function refreshDemand() {
    bookCost = cost[0]
    demand[0] = 80/bookCost
    document.getElementById("bookDemand").innerHTML = "demand: "+ (Math.round(demand[0] * 100) / 100).toFixed(2) +"%"
}

function makeBookBtn() {
    makeBook()
    document.getElementById("sellBook").disabled=true
    setTimeout(function(){
        document.getElementById("sellBook").disabled=false
    },500);
}

function buyMaterialsPaper() {
    console.log("dfsds")
    money-=buyMaterialValues[0]
    materialValues[0] += 75
}

function makeBook() {
    if (materialValues[0]<200){
        return
    }
    materialValues[0]-=200
    inventoryValues[0]+=1
};

function disableEnableButtons() {
    if (materialValues[0] < 200){
        document.getElementById("sellBook").disabled=true
    }
}

function refreshMaterials() {
    var names =""
    var values =""
    for(i=0; i<materialNames.length; i++){
        names += materialNames[i] + "<br>";
        values += materialValues[i] + "<br>";
    }
    document.getElementsByClassName("materialNames")[0].innerHTML = names;
    document.getElementsByClassName("materialValues")[0].innerHTML = values;
}

function refreshInventory() {
    var names =""
    var values =""
    for(i=0; i<inventoryNames.length; i++){
        names += inventoryNames[i] + "<br>";
        values += inventoryValues[i] + "<br>";
    }
    document.getElementsByClassName("inventoryNames")[0].innerHTML = names;
    document.getElementsByClassName("inventoryValues")[0].innerHTML = values;
}

function refreshMoney() {
    document.getElementsByClassName("count")[0].innerHTML = "Money: $" + (Math.round(money * 100) / 100).toFixed(2);
}

function refreshBuyMaterials() {
    var names =""
    var values =""
    for(i=0; i<buyMaterialNames.length; i++){
        names += buyMaterialNames[i] + "<br>";
        if(money>buyMaterialValues[i]){
            values += '<button type="button" onClick="buyMaterials'+buyMaterialNames[i]+'()" class = "button" id = "buyMaterials'+buyMaterialNames[i]+'">'+buyMaterialValues[i] + '$</button><br>';
        }else{
            console.log(money+" "+buyMaterialValues[i])
            values += '<button type="button" onClick="buyMaterials'+buyMaterialNames[i]+'()" class = "button" disabled = true id = "buyMaterials'+buyMaterialNames[i]+'">'+buyMaterialValues[i] + '$</button><br>';
        }
    }
    document.getElementsByClassName("buyNames")[0].innerHTML = names;
    document.getElementsByClassName("buyCost")[0].innerHTML = values;
}

function tick() {
    refreshDemand()
    refreshMoney()
    refreshMaterials()
    refreshInventory()
    refreshCost()
    refreshBuyMaterials()

    buyStuff()

    disableEnableButtons()
    console.log("tick")
}

function runTicks() {
    setInterval(tick, 50);
}
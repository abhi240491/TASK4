//Countries with dollar as currency

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();

request.onload = function(){
    var data = JSON.parse(this.response)
    var verifyString = "DOLLAR"
    var Countries = data.filter((item) => {
        var currency = item.currencies[0].name.toUpperCase();
        if(currency.includes(verifyString))
            console.log(item.name, currency);
    });
}
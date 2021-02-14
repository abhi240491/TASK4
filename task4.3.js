//Print name, flag, and capital using foreach.

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()

request.onload = function() {
    var data = JSON.parse(this.response)
    data.forEach(item => console.log(item.name,item.flag,item.capital))
}

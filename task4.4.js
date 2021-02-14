var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    var totalPopulation = data.reduce((acc,item) => { return acc+item.population},0)
    console.log(totalPopulation)
}
//Countries with population less than 2 Lack
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    var CountPopulation = data.filter((item) => 
    {if (item.population < 200000)
        console.log(item.name);
    });
    
    console.log(CountPopulation)
    
}
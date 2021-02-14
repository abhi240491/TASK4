var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();

request.onload = function(){
    var data = JSON.parse(this.response)
    var asiaCountries = data.filter((item) => {
        if(item.region === "Asia")
            console.log(item.name)
        
});
    console.log(asiaCountries)
}
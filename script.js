//Combine Two Arrays
const regionAsia= fetch("https://restcountries.eu/rest/v2/region/Asia")
.then((data)=>data.json());
const regionEurope=fetch("https://restcountries.eu/rest/v2/region/Europe/")
.then((data)=>data.json());

console.log(regionAsia,regionEurope)
Promise.all([regionAsia,regionEurope]).then((countries)=>{
    var total = countries[0].concat(countries[1]);
    console.log(total);
});


//Country which speaks spanish in Germany
var lan=[];

const lang= fetch("https://restcountries.eu/rest/v2/region/Europe/")
.then((response)=>response.json())
.then((data)=>{
  data.forEach((ele) => {
        ele.languages.filter((val)=>{
            if(val.name=="Spanish")
          lan.push(ele);
        });
        
    });
console.log(lan);

})

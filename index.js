const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apiKey="TlpQyNpszw3ECa89nP032Q==3vwGfGGlztpda8fr";

const options={
    method:"Get",
    headers:{
        "X-Api-Key": apiKey,
    }, 
};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerText="Updating...";
    btnEl.disable=true;
    btnEl.innerText="Loading...";
    const response= await fetch(apiURL,options);
    const data= await response.json();

    btnEl.disable=false;
    btnEl.innerText="Tell me a joke";

    jokeEl.innerText=data[0].joke;
    
        
    } catch (error) {
        jokeEl.innerText="An error happened, Try again later...";
        btnEl.disable=false;
        btnEl.innerText="Tell me a joke";
    }

    
}

btnEl.addEventListener("click",getJoke)  
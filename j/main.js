
//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.

fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        html = `<dl class="house-list">`;

        data.forEach((house) => {
            //let family = house.members.join(" | ");

            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
           
            html += `<dt class="house-name">${house.name}</dt>`; 
            house.members.forEach((name) => {
            html += `<dd class="house-members">${name}</dd>`;
            });
        
            
        
        });

        html += `</dl>`;
       

        //make a reference to the html container where
        //the info will be displayed.
        var container = document.getElementById("container");
        container.innerHTML += html;
    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process

    // part two




     function color(){
        fetch("https://www.colr.org/json/color/random")
        .then((response) => response.json())
        .then((data) => {

            //let hex = data.colors[0].hex;
           let hex = data.colors[0].hex;

            
           

            hex = "#" + hex;


            document.body.style.backgroundColor = hex;
        })

        .catch((error) => {
            console.log(error);

        });

    }

    window.onload = color; 

  

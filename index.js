let doc = document.getElementById("main");
let con = document.querySelectorAll(".container");
let ttl = document.getElementById("heading");
ttl.innerHTML += `  <h1 id="ourt">our tours<hr></h1>`
    // console.log("this is it :", para / 2)

const array = [{
        img: "./tour-1.jpeg",
        title: "Best Of Paris In 7 Days Tour",
        text: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. ",
        text2: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
        Price: "$1,995"

    }, {

        img: "./tour-2.jpeg",
        title: "Best Of Ireland In 14 Days Tour",
        text: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and ",
        text2: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and  seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
        Price: "$3,895"

    },
    {
        img: "./tour-3.jpeg",
        title: "Best Of Salzburg & Vienna In 8 Days Tour",
        text: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. ",
        text2: " Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
        Price: "$2,695"
    },
    {
        img: "./tour-4.jpeg",
        title: "Best Of Rome In 7 Days Tour",
        text: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, ",
        text2: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
        Price: "$2,095"
    },
    {
        img: "./tour-5.jpeg",
        title: "Best Of Poland In 10 Days Tour",
        text: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days.",
        text2: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
        Price: "$2,595"
    }
]


for (let i = 0; i < array.length; i++) {


    doc.innerHTML += `
    <div id = "ins1">    
    <img src = "${array[i].img}" id="img">
    <h4 class="h4">${array[i].Price}</h4>
    <div id = "textArea">
    <h2 class="h2">${array[i].title}</h2>
    <p class="text" id="txt1">${array[i].text}<button   class = "see semore">... see more</button></p>
    <p class="text" id="txt2">${array[i].text2}<button class = "see seless">... see less</button></p>
    </div>
    <button class="btn">Not Interested</button>
    </div>
    `;

}

// from here i am trying to set button for see more and less
let text1 = document.getElementById("txt1");
let text2 = document.getElementById("txt2");
let seemore = document.getElementsByClassName("semore");
let seeless = document.getElementsByClassName("seless");




let see = document.querySelectorAll(".see")
console.log("inside  seee , ", see)
for (let i = 0; i < see.length; i++) {
    see[i].addEventListener("click", () => {
        console.log("wrking we are her")
        let seebtn = document.querySelectorAll('#ins1');

        if (seebtn) {
            console.log("inside first if")
            if (text1 && text2) {
                console.log("inside 2n if ")
                    // Check if both text1 and text2 exist
                    // text1.style.display = text1.style.display === "none" ? "block" : "none";
                    // text2.style.display = text2.style.display === "none" ? "block" : "none";

                seemore[i].addEventListener("click", () => {
                    text2[i].style.display = "block";
                    text1[i].style.display = "none";
                    seemore.style.display = "none";
                    console.log("working")

                });

                seeless[i].addEventListener("click", () => {
                    text2[i].style.display = "none";
                    seemore.style.display = "block";
                    text1[i].style.display = "block";

                    console.log("working")

                });
            }
        }

    });
}

// from here i am trying to set the buttonsfor not interesting buttons

let butn = document.querySelectorAll(".btn");

for (let i = 0; i < butn.length; i++) {
    butn[i].addEventListener("click", () => {
        console.log("working")
        let ins = butn[i].closest('#ins1');
        if (ins) {
            ins.remove();

            if (document.querySelectorAll('#ins1').length === 0) {
                ttl.style.display = "none";
                doc.innerHTML +=
                    `
                           <div class="aftr">
                           <h4 id = "title">No Tours Left</h4>
                           <a href="" id="rfrsh"><button >Refresh</button>
                           <a></div>
                        `;
                let rfrshbtn = document.getElementById("rfrsh")
                rfrshbtn.addEventListener("click", () => {
                    location.reload();


                })

            }

        };

    });



}










// function updateDisplay() {
//     doc.innerHTML =
// }


// function str() {
//     let counnt = 0;
//     let previous = 0;
//     for (let i = 0; i < str.length - 1; i++) {
//         if () {

//         }
//     }
// }
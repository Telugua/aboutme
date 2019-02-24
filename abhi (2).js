
function cube(valNum) {
    const valNum=parseFloat(document.getElementById("inputnumber"));
    if(valNum<0)
        alert("value cannot be negative");
    else
      document.getElementById("output").innerHTML=valNum*valNum*valNum;
     
    }

    console.log('get random quotes: AJAX fetch')
const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=num"
document.getElementById('submit').addEventListener('click', function() {
    fetch(url)
    .then((res) => { return res.json() }) 
    .then((data) => {          
        data.forEach((item) => {
            const { image } = item
           
            document.getElementById('image').src = image;
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error)); 
    })
})
/**/
var filePath;
setTimeout(() => document.getElementById('fichier').addEventListener('change', function(event) {
    var filePath = event.target.value;
    console.log(filePath);

    
document.getElementById("sub").onclick = ()=>{
    const titre = document.getElementById("titre").value;
    const desc = document.getElementById("desc").value;
    const clase = document.getElementById("class").value;
    const level = document.getElementById("level").value;
    const subject = document.getElementById("Subject").value;

    const myData = {
        "id" :1,
        "titre": titre,
        "desc": desc,
        "rating":1,
        "clase": clase,
        "level":level,
        "subject":subject,
        "postedby" :"sedkishabou7@gmail.com",
        "isapproved" :1,
        "file" :filePath
    }

    fetch("http://localhost:3000/Document-Set", {
                    method: "POST",
                    body: JSON.stringify(myData),
                    headers : {"Content-Type": "application/json"} // ask yassine
                }).then((response) => response.json())
                    .then((json) => console.log(json));s
    
}
}), 1000)



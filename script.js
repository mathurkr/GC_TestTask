async function getJSON(url){
    let response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let photoBlob= await response.blob();
    let blobText = await photoBlob.text();
    let jsonObj = JSON.parse(blobText);
    return jsonObj;
}

function fillGallery(jsonText){
    let element=document.getElementById('gallery');
    for(let x = 0;x<jsonText.length;x++){
        console.log(hi);
    }
}

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' });
    let dateFormatted=date.toLocaleDateString();
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent=dateFormatted;
 }
const photoJSON = getJSON("https://picsum.photos/v2/list?limit=10");
fillGallery(photoJSON);
displayTime();
setInterval(displayTime,1000);
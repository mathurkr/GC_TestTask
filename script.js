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

async function fillGallery(url){
    let jsonObj = await getJSON(url);

    let gallery=document.getElementById('gallery');

    for(let index = 0;index<jsonObj.length;index++){
        let newPic = document.createElement('div');
        if(index===0){
            newPic.className='carousel-item active';
        }
        else{
            newPic.className='carousel-item';
        }

        let src=jsonObj[index].download_url;
        let author=jsonObj[index].author;

        newPic.innerHTML=`<img src=${src} class="d-block w-100">
        <div class="carousel-caption d-md-block">
        <h5>${author}</h5>
      </div>`;
        console.log(newPic);
        gallery.appendChild(newPic);
    }
}

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' });
    let dateFormatted=date.toLocaleDateString();
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent=dateFormatted;
 }

fillGallery("https://picsum.photos/v2/list?limit=10");
displayTime();
setInterval(displayTime,1000);
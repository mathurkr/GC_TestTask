function fillGallery(url){
    let promise=fetch(url);
    console.log(promise);
}
function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' });
    let dateFormatted=date.toLocaleDateString();
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent=dateFormatted;
 }
 displayTime();
 setInterval(displayTime,1000);
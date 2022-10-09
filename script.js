const pack = document.getElementById('pack');
const visCount = document.getElementById('visCount');
updateSiteCounter();

function openPack() {
    var img = document.createElement('img');
    img.src = "./img/moneyfire.gif";
    pack.replaceChildren(img);
}

function updateSiteCounter() {
    fetch('https://api.countapi.xyz/hit/regularwave_mtg-30AE-sim')
        .then(response => response.json())
        .then(response => {
            visCount.innerHTML = response.value;
        })
}
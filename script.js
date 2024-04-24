const pack = document.getElementById('pack');

function openPack() {
    var img = document.createElement('img');
    img.src = "./img/moneyfire.gif";
    pack.replaceChildren(img);
}
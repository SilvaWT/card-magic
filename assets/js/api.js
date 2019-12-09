let $ = function (element) { return document.querySelector(element) }

let api = function (yourUrl) {
    let Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

let cardsId = JSON.parse(api("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")).deck_id;
let cardList = JSON.parse(api("https://deckofcardsapi.com/api/deck/" + cardsId + "/draw/?count=21")).cards;